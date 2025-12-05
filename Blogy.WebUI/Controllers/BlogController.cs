using Blogy.Business.DTOs.BlogDtos;
using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.CategoryServices;
using Microsoft.AspNetCore.Mvc;
using PagedList.Core;
using System.Threading.Tasks;

namespace Blogy.WebUI.Controllers
{
    public class BlogController(IBlogService _blogService,ICategoryService _categoryService) : Controller
    {
        public async Task<IActionResult> Index(int page = 1, int pageSize = 15)
        {
            var allBlogs = await _blogService.GetAllAsync();

            var values = new PagedList<ResultBlogDto>(allBlogs.AsQueryable(), page, pageSize);




            return View(values);
        }


        public async Task<IActionResult> GetBlogsByCategory(int id)
        {
            var category=await _categoryService.GetByIdCategoryAsync(id);
            ViewBag.CategoryName=category.Name;
            ViewBag.CategoryId=category.Id;
            return View();
        }



        public async Task<IActionResult> BlogDetails(int id)
        {
            var blog=await _blogService.GetAllAsync(x=>x.Id==id);
            var oneBlog=blog.FirstOrDefault();

            ViewBag.commentCountinBlog=oneBlog.Comments.Count();


            return View(oneBlog);

        }









    }
}
