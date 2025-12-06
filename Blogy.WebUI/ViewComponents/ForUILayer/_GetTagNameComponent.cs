using Blogy.Business.Services.TagServices;
using Blogy.DataAccess.Repositories.TagRepositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetBlogsByCategory
{
    public class _GetTagNameComponent(ITagService _tagService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var allTag=await _tagService.GetAllAsync();
            return View(allTag);
        }





    }
}
