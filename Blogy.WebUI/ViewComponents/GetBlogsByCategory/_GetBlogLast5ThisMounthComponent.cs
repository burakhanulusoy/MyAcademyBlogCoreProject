using Blogy.Business.Services.BlogServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetBlogsByCategory
{
    public class _GetBlogLast5ThisMounthComponent(IBlogService _blogService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {

            var blogs = (await _blogService.GetAllAsync())
                .Where(x => x.CreatedDate.Month == DateTime.Now.Month &&
                            x.CreatedDate.Year == DateTime.Now.Year)  // yıl kontrolü de önemli!
                .OrderByDescending(x => x.CreatedDate)
                .Take(4)
                .ToList();

            return View(blogs);


        }









    }
}
