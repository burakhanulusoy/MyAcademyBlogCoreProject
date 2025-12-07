using Blogy.Business.Services.BlogServices;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.ViewComponents.UILayout
{
    public class _FooterTheMostTagHaveBlogComponent(IBlogService _blogService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var blogs = await _blogService.GetBlogWithTagsTheMostTag3Async();
            return View(blogs);



        }








    }
}
