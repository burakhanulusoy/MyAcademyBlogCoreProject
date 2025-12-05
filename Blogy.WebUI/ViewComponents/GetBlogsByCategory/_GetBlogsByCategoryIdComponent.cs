using Blogy.Business.Services.BlogServices;
using Blogy.DataAccess.Repositories.BlogRepositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetBlogsByCategory
{
    public class _GetBlogsByCategoryIdComponent(IBlogService _blogService):ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(int id)
        {

            var blogs=await _blogService.GetBlogsWithCategoryIdAsync(id);
            return View(blogs);
        }




    }
}
