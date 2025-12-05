using AutoMapper;
using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetInfoForUser
{
    public class GetAllInfoLoginUserComponent(UserManager<AppUser> _userManager,IMapper _mapper):ViewComponent
    {


        public async Task<IViewComponentResult> InvokeAsync()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var mapUser=_mapper.Map<EditProfileDto>(user);

            ViewBag.userName = user.UserName;
            var roles = await _userManager.GetRolesAsync(user);
            ViewBag.roleName = string.Join(", ", roles);

            return View(mapUser);


        }




    }
}
