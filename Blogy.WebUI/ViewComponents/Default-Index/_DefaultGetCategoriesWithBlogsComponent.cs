using Blogy.Business.Services.CategoryServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.Default_Index
{
    public class _DefaultGetCategoriesWithBlogsComponent(ICategoryService _categoryService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {

            var categoriesWithBlogs=await _categoryService.GetCategoriesWithBlogsAsync();

            return View(categoriesWithBlogs);

        }




    }
}
