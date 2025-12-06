using Blogy.Business.DTOs.CommentDtos;
using Blogy.Business.Services.CommentServices;
using Blogy.Entity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;

namespace Blogy.WebUI.Controllers
{
    public class CommentsController(ICommentService _commentService,
                                     UserManager<AppUser> _userManager
                                     ,IConfiguration _configuration) : Controller
    {
        [HttpPost]
        public async Task<IActionResult> AddComment(int id, string text)
        {
            // 1. ÖNCE KULLANICI GİRİŞ YAPMIŞ MI KONTROL ET
            if (!User.Identity.IsAuthenticated || string.IsNullOrEmpty(User.Identity.Name))
            {
                TempData["Error"] = "Yorum yapabilmek için önce giriş yapmalısınız!";
                // Hata buradaydı: Giriş yapmamışsa aşağıdaki FindByNameAsync'e null gidiyordu.
                return RedirectToAction("BlogDetails", "Blog", new { id = id });
            }

            // 2. ARTIK GÜVENLE KULLANICIYI ÇAĞIRABİLİRSİN
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            // (Eğer Identity veritabanında bir sorun varsa diye yine de null kontrolü kalsın)
            if (user == null)
            {
                TempData["Error"] = "Kullanıcı bulunamadı.";
                return RedirectToAction("BlogDetails", "Blog", new { id = id });
            }

            if (string.IsNullOrWhiteSpace(text))
            {
                TempData["Error"] = "Lütfen bir yorum giriniz!";
                return RedirectToAction("BlogDetails", "Blog", new { id = id });
            }

            if(text.Length<10)
            {
                TempData["Error"] = "Lütfen yorumunu minumum 10 karakterli giriniz!";
                return RedirectToAction("BlogDetails", "Blog", new { id = id });
            }
            if (text.Length > 250)
            {
                TempData["Error"] = "Lütfen yorumunu maximum 250 karakterli giriniz!";
                return RedirectToAction("BlogDetails", "Blog", new { id = id });
            }
            // Yapay Zeka Kontrolü
            bool toxic = await IsToxicAsync(text);
            if (toxic)
            {
                TempData["Error"] = "⚠ Yorumunuz uygunsuz içerik içeriyor ve yayınlanamaz!";
                return RedirectToAction("BlogDetails", "Blog", new { id = id });
            }

            // Kayıt İşlemi
            CreateCommentDto dto = new CreateCommentDto();
            dto.Content = text;
            dto.UserId = user.Id;
            dto.BlogId = id;
        

             await _commentService.CreateAsync(dto);

            TempData["Success"] = "Yorumunuz başarıyla eklendi.";
            return RedirectToAction("BlogDetails", "Blog", new { id = id });
        }

        // AI Metodunu buraya private olarak taşıdık
        private async Task<bool> IsToxicAsync(string text)
        {
            var myapikey = _configuration["MyApiKey"];
            using var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {myapikey}");

            string prompt = $"Bu yorum küfür, hakaret, şiddet veya cinsellik içeriyor mu? Sadece 'true' veya 'false' olarak cevap ver. Yorum: \"{text}\"";

            var requestBody = new
            {
                model = "gpt-4o-mini",
                messages = new[] { new { role = "user", content = prompt } },
                max_tokens = 5
            };

            string jsonBody = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(jsonBody, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);
            string responseString = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode) return false;

            using var doc = JsonDocument.Parse(responseString);
            var message = doc.RootElement.GetProperty("choices")[0].GetProperty("message").GetProperty("content").GetString().Trim().ToLower();

            return message.Contains("true");
        }
    }
}
