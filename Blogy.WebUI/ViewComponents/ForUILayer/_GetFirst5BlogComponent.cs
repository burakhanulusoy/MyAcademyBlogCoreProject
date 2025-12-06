using Blogy.Business.Services.BlogServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetBlogsByCategory
{
    public class _GetFirst5BlogComponent(IBlogService _blogService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var firs5Blog=(await _blogService.GetAllAsync()).OrderBy(x=>x.Id).Where(x=>x.ToxicityValue==1)
                .Take(5).ToList();
            return View(firs5Blog);
            


        }



    }
}
