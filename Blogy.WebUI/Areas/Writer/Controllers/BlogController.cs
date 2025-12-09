using Blogy.Business.DTOs.BlogDtos;
using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.CategoryServices;
using Blogy.Business.Services.TagServices;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using PagedList.Core;
using System.Text;
using System.Text.Json;

namespace Blogy.WebUI.Areas.Writer.Controllers
{
    [Area(Roles.Writer)]
    [Authorize(Roles =Roles.Writer)]
    public class BlogController(IBlogService _blogService, UserManager<AppUser> _userManager,
                                ITagService _tagService, ICategoryService _categoryService
                                , IConfiguration _configuration) : Controller
    {


        public async Task<IActionResult> Index(int page = 1, int pageSize = 12)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            ViewBag.name = user.FirstName + " " + user.LastName;
            var blogs = await _blogService.GetBlogsWithUserIdAsync(user.Id);
            var values = new PagedList<ResultBlogDto>(blogs.AsQueryable(), page, pageSize);
            return View(values);
        }
        private async Task GetTagsName()
        {
            var tags = await _tagService.GetAllAsync();

            ViewBag.Tags = (from tag in tags
                            select new SelectListItem
                            {

                                Text = tag.Name,
                                Value = tag.Id.ToString()

                            }).ToList();

        }



        private async Task GetCategoriesName()
        {

            var categories = await _categoryService.GetAllCategoryAsync();

            ViewBag.Categories = (from category in categories
                                  select new SelectListItem
                                  {
                                      Text = category.CategoryName,
                                      Value = category.Id.ToString()
                                  });


        }


        public async Task<IActionResult> CreateBlog()
        {
            await GetTagsName();
            await GetCategoriesName();
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> CreateBlog(CreateBlogDto createBlogDto)
        {



            if (!ModelState.IsValid)
            {
                await GetTagsName();
                await GetCategoriesName();
                return View(createBlogDto);
            }


            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            createBlogDto.WriterId = user.Id;
            createBlogDto.ToxicityValue = 0;

            await _blogService.CreateAsync(createBlogDto);
            return RedirectToAction("Index");


        }



        [HttpPost]
        public async Task<IActionResult> GenerateAiContent([FromBody] string topic)
        {
            var apiKey = _configuration["MyApiKey"];
            using var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");

            // SYSTEM PROMPT:
            // Format ve stil kuralları. Artık "Visual & Engaging" (Görsel ve İlgi Çekici) olmasını istiyoruz.
            string systemPrompt = @"You are an expert, professional blog writer who writes deep, engaging, and visually appealing articles.

    GLOBAL FORMAT RULES:
    1. Output MUST be valid HTML tags ONLY (<h3>, <p>, <ul>, <li>, <strong>).
    2. NO Markdown, NO <html>/<body> tags.
    3. VISUAL STYLE: Use relevant emojis/icons (🚀, 💡, ✅, 🔥, etc.) in every <h3> header and list item to make the text look modern and fun.
    4. LENGTH: This must be a 'Deep Dive' article. Do not write short summaries. Write long, detailed paragraphs.";

            // USER PROMPT:
            // Dil aynalama kuralı + Uzunluk emri + Emoji emri
            string userPrompt = $@"
    INPUT TOPIC: '{topic}'

    INSTRUCTIONS:
    1. LANGUAGE DETECTION (CRITICAL): Detect the language of the topic. Write the WHOLE article in that EXACT language. (English -> English, Turkish -> Turkish).
    
    2. CONTENT DEPTH (VERY IMPORTANT): 
       - Write a LONG, COMPREHENSIVE article. 
       - Expand on the 'Why', 'How', and 'Examples'.
       - Aim for at least 5-6 detailed sections/headings.
       - Do not be superficial; explain concepts in depth.

    3. EMOJI USAGE: 
       - Add cool emojis to the beginning of every <h3> Title. (e.g. <h3>🚀 Introduction</h3>)
       - Add checkmarks or dots (✅, 🔹) to list items.

    Start writing the HTML content now.";

            var requestBody = new
            {
                model = "gpt-4o-mini",
                messages = new[]
                {
            new { role = "system", content = systemPrompt },
            new { role = "user", content = userPrompt }
        },
                // Makale uzun olsun diye token limitini artırdık
                max_tokens = 3500,
                temperature = 0.5 // Biraz daha yaratıcı olsun ki emojileri güzel seçsin
            };

            string jsonBody = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(jsonBody, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);

            if (!response.IsSuccessStatusCode)
            {
                var hataMesaji = await response.Content.ReadAsStringAsync();
                return BadRequest($"OpenAI Hatası: {response.StatusCode} - Detay: {hataMesaji}");
            }

            string responseString = await response.Content.ReadAsStringAsync();
            using var doc = JsonDocument.Parse(responseString);

            var generatedText = doc.RootElement
                                .GetProperty("choices")[0]
                                .GetProperty("message")
                                .GetProperty("content")
                                .GetString();

            return Json(new { content = generatedText });
        }

        public async Task<IActionResult> DeleteBlog(int id)
        {
            await _blogService.DeleteAsync(id);

            return RedirectToAction(nameof(Index));
        }


        public async Task<IActionResult> UpdateBlog(int id)
        {
            await GetTagsName();
            await GetCategoriesName();
            var blog = await _blogService.GetByIdAsync(id);
            return View(blog);
        }


        [HttpPost]
        public async Task<IActionResult> UpdateBlog(UpdateBlogDto updateBlogDto)
        {
            if (!ModelState.IsValid)
            {
                await GetTagsName();
                await GetCategoriesName();
                return View(updateBlogDto);
            }
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            updateBlogDto.WriterId = user.Id;
            updateBlogDto.ToxicityValue = 0;


            await _blogService.UpdateAsync(updateBlogDto);
            return RedirectToAction("BlogDetails", new { id = updateBlogDto.Id });




        }


        public async Task<IActionResult> BlogDetails(int id)
        {
            var blog = await _blogService.GetAllAsync(x => x.Id == id);
            var oneBlog = blog.FirstOrDefault();

            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            ViewBag.user = user.FirstName + " " + user.LastName;
            ViewBag.userImg = user.ImageUrl;

            return View(oneBlog);


        }

        [HttpGet]
        public async Task<IActionResult> AnalyzeToxicity(int id)
        {
            try
            {
                // 1. Blogu bul
                var blog = await _blogService.GetByIdAsync(id);
                if (blog == null) return Json(new { success = false, message = "Blog bulunamadı." });

                // HTML'i temizle
                string fullText = blog.Title + ". " + blog.Description;
                if (!string.IsNullOrEmpty(fullText))
                {
                    fullText = System.Text.RegularExpressions.Regex.Replace(fullText, "<.*?>", " ");
                }

                // --- KRİTİK HAMLE: Metni Cümlelere Bölüyoruz ---
                // Böylece küfür, tarih yazısının içinde kaybolmaz. Tek başına yakalanır.
                var sentences = fullText.Split(new[] { '.', '?', '!', '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries)
                                        .Where(s => s.Trim().Length > 5) // Çok kısa (örn: "vb") şeyleri at
                                        .Select(s => s.Trim())
                                        .ToList();

                // Eğer metin çok uzunsa API şişmesin diye en fazla 50 cümle gönderelim (veya hepsini)
                // Hugging Face array olarak veri kabul eder.

                var hfToken = _configuration["HuggingFaceApiKey"];
                if (string.IsNullOrEmpty(hfToken)) return Json(new { success = false, message = "HF Token eksik." });

                using var client = new HttpClient();
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {hfToken}");

                var modelId = "unitary/multilingual-toxic-xlm-roberta";
                var url = $"https://router.huggingface.co/hf-inference/models/{modelId}";

                // İsteği "Liste" olarak atıyoruz: ["Cümle 1", "Cümle 2 (Küfürlü)", "Cümle 3"]
                var requestBody = new { inputs = sentences };
                var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");

                var response = await client.PostAsync(url, content);

                if (!response.IsSuccessStatusCode)
                {
                    var err = await response.Content.ReadAsStringAsync();
                    if (err.Contains("loading"))
                        return Json(new { success = false, message = "Model ısınıyor, 10 sn sonra tekrar dene." });
                    return Json(new { success = false, message = "API Hatası: " + response.StatusCode });
                }

                var responseString = await response.Content.ReadAsStringAsync();
                using var doc = JsonDocument.Parse(responseString);
                var root = doc.RootElement;

                // --- SONUÇLARI ANALİZ ET ---
                // Gelen yanıt bir "Liste içinde Liste"dir. Her cümle için ayrı skor döner.
                // Bizim için önemli olan: Herhangi bir cümle toksik mi?

                double maxToxicScore = 0;
                string detectedToxicSentence = "";

                if (root.ValueKind == JsonValueKind.Array)
                {
                    int sentenceIndex = 0;
                    // Her cümlenin analiz sonucunu geziyoruz
                    foreach (var sentenceResult in root.EnumerateArray())
                    {
                        // sentenceResult bir dizi skor içerir: [{"label":"toxic","score":0.9}, ...]
                        foreach (var item in sentenceResult.EnumerateArray())
                        {
                            string label = item.GetProperty("label").GetString();
                            double score = item.GetProperty("score").GetDouble() * 100;

                            // Bu etiketlerden herhangi biri yüksekse yakala
                            // "toxic", "severe_toxic", "obscene" (küfür), "insult" (hakaret)
                            if ((label == "toxic" || label == "severe_toxic" || label == "obscene" || label == "insult") && score > maxToxicScore)
                            {
                                maxToxicScore = score;
                                // Hangi cümlede bulduğunu da loglayabilirsin
                                if (sentenceIndex < sentences.Count)
                                    detectedToxicSentence = sentences[sentenceIndex];
                            }
                        }
                        sentenceIndex++;
                    }
                }

                // --- KARAR ---
                // Artık eşiği %50 yapabiliriz çünkü cümle bazlı baktığımız için küfür varsa skor %90 çıkar.
                bool isToxic = maxToxicScore > 50;

                var analysisResult = new
                {
                    GenelDurum = isToxic ? "ZARARLI İÇERİK! 🚨" : "TEMİZ ✅",
                    Detay = isToxic ? $"Tespit Edilen Risk: %{maxToxicScore:F2}" : "Güvenli içerik.",
                    // Merak edersen hangi cümlede bulduğunu da dönebilirsin (debugging için)
                    SucluCumle = isToxic && !string.IsNullOrEmpty(detectedToxicSentence) ? detectedToxicSentence.Substring(0, Math.Min(detectedToxicSentence.Length, 50)) + "..." : ""
                };

                return Json(new { success = true, data = analysisResult });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Hata: " + ex.Message });
            }
        }





        public async Task<IActionResult> GetBlogsNonCheckedAdmin(int page = 1, int pageSize = 28)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            var blogs = await _blogService.GetBlogsAdminNonCheckedByUserIdAsync(user.Id);

            var values = new PagedList<ResultBlogDto>(blogs.AsQueryable(), page, pageSize);

            return View(values);

        }
        public async Task<IActionResult> GetBlogsToxic(int page = 1, int pageSize = 28)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            var blogs = await _blogService.GetBlogxToxicByUserIdAsync(user.Id);

            var values = new PagedList<ResultBlogDto>(blogs.AsQueryable(), page, pageSize);

            return View(values);

        }

        public async Task<IActionResult> GetBlogsNonTooxic(int page = 1, int pageSize = 28)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            var blogs = await _blogService.GetBlogxNonToxicByUserIdAsync(user.Id);

            var values = new PagedList<ResultBlogDto>(blogs.AsQueryable(), page, pageSize);

            return View(values);

        }






    }
}
