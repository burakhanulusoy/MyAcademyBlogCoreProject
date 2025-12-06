using Blogy.Business.Services.OurTeamServices;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.ViewComponents.ForUILayer
{
    public class _GetOurTeamMembersComponent(IOurTeamService _ourTeamService):ViewComponent
    {


        public async Task<IViewComponentResult> InvokeAsync()
        {
            var members = await _ourTeamService.GetAllAsync();
            return View(members);
           
        }





    }
}
