using Blogy.Business.Services.CategoryServices;
using Blogy.DataAccess.Repositories.CategoryRepositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetBlogsByCategory
{
    public class _CategoryCountComponent(ICategoryService _categoryService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {

            var categories=await _categoryService.GetCategoriesWithBlogsAsync();

            return View(categories);
        }



    }
}
