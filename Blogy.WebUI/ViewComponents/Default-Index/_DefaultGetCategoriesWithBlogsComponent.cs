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
            foreach (var category in categoriesWithBlogs)
            {
                category.Blogs = category.Blogs
                    .OrderByDescending(x => x.CreatedDate)
                    .Where(x=>x.ToxicityValue==1)
                    .Take(6)
                    .ToList();
            }
            return View(categoriesWithBlogs);

        }




    }
}
