using Blogy.Business.Services.BlogServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetBlogsByCategory
{
    public class _GetTheMostCommentHaveBlogComponent(IBlogService _blogService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {

            var blogs=(await _blogService.GetAllAsync()).OrderByDescending(x=>x.Comments.Count)
                .Take(5).ToList();


            return View(blogs);



        }





    }
}
