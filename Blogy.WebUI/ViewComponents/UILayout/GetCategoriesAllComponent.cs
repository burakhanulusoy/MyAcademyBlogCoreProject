using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.CategoryServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.UILayout
{
    public class GetCategoriesAllComponent(ICategoryService _categoryService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var categories=await _categoryService.GetAllCategoryAsync();
            return View(categories);


        }


    }
}
