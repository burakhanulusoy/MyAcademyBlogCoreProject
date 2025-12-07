using Blogy.Business.Services.SocialMediaServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.UILayout
{
    public class _GetSocialMediasForFooterComponent(ISocialMediaService _socialMediaService):ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var items = await _socialMediaService.GetAllAsync();
            return View(items);


        }




    }
}
