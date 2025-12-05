using Blogy.Business.DTOs.CommentDtos;
using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.CommentServices;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using PagedList.Core;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area(Roles.Admin)]
    [Authorize(Roles =Roles.Admin)]
    public class CommentController(ICommentService _commentService,IBlogService _blogService,UserManager<AppUser> _userManager,IConfiguration _configuration) : Controller
    {

        private readonly string myapikey = _configuration["MyApiKey"];
        private async Task<bool> IsToxicAsync(string text)
        {
            using var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {myapikey}");

            string prompt = $"Bu yorum küfür, hakaret, şiddet veya cinsellik içeriyor mu? Sadece 'true' veya 'false' olarak cevap ver. Yorum: \"{text}\"";

            var requestBody = new
            {
                model = "gpt-4o-mini",
                messages = new[]
                {
                    new { role = "user", content = prompt }
                },
                max_tokens = 5
            };

            string jsonBody = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(jsonBody, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);
            string responseString = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode) return false; // hata olursa normal kabul et

            using var doc = JsonDocument.Parse(responseString);
            var message = doc.RootElement
                             .GetProperty("choices")[0]
                             .GetProperty("message")
                             .GetProperty("content")
                             .GetString()
                             .Trim()
                             .ToLower();

            return message.Contains("true");
        }



        private async Task GetBlogs()
        {
            var blogs=await _blogService.GetAllAsync();
            ViewBag.blogs = (from blog in blogs
                             select new SelectListItem
                             {
                                 Text = blog.Title,
                                 Value = blog.Id.ToString()
                             }).ToList();
        }


        public async Task<IActionResult> Index(int page=1,int pageSize=20)
        {
          var comments=await _commentService.GetAllAsync();
          
          var values=new PagedList<ResultCommentDto>(comments.AsQueryable(),page, pageSize);
            
            return View(values);
        }

        public async Task<IActionResult> CreateComment()
        {
            await GetBlogs();
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> CreateComment(CreateCommentDto createCommentDto)
        {
            await GetBlogs();

            if (string.IsNullOrWhiteSpace(createCommentDto.Content))
            {
                ViewBag.Error = "Lütfen bir yorum giriniz!";
                return View(createCommentDto);
            }

            bool toxic = await IsToxicAsync(createCommentDto.Content);

            if (toxic)
            {
                ViewBag.Error = "⚠ Yorumunuz uygunsuz içerik içeriyor!";
                return View(createCommentDto);
            }

            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            createCommentDto.UserId = user.Id;

            await _commentService.CreateAsync(createCommentDto);

            return RedirectToAction("Index");
        }

        public async Task<IActionResult> DeleteComment(int id)
        {

            await _commentService.DeleteAsync(id);
            return RedirectToAction("Index");



        }


        public async Task<IActionResult> GetCommentByUserId(int id)
        {
            var user=await _userManager.FindByIdAsync(id.ToString());
            ViewBag.name = user.UserName;


            var comments = await _commentService.GetAllAsync(x => x.UserId == id);





            return View(comments);


        }


        public async Task<IActionResult> GetCommentByBlogId(int id)
        {

            var comments=await _commentService.GetAllAsync(x=>x.BlogId == id);

            var blog = await _blogService.GetAllAsync(x => x.Id==id);
            var oneBlog=blog.FirstOrDefault();

            ViewBag.blogName = oneBlog.Title;
            ViewBag.writerName = oneBlog.Writer.FullName;

            return View(comments);


        }










    }
}
