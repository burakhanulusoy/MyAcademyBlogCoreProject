using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles=Roles.Admin)]
    public class ChangePasswordController(UserManager<AppUser> _userManager , SignInManager<AppUser> _signInManager) : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Index(ChangePasswordDto passwordDto)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            if(!ModelState.IsValid)
            {
                return View(passwordDto);
            }

            var result = await _userManager.ChangePasswordAsync(user, passwordDto.CurrentPassword, passwordDto.NewPassword);

            if(!result.Succeeded)
            {
                foreach (var item in result.Errors)
                {

                    ModelState.AddModelError(item.Code, item.Description);
                }
                return View(passwordDto);

            }


            await _signInManager.SignOutAsync();//cıkıs yapsın
            return RedirectToAction("Index","Login",new {area=string.Empty});

           
        }






    } 
}
