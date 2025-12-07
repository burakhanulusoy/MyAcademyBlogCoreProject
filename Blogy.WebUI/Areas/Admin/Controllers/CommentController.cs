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
