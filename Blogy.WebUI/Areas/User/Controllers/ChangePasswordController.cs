using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.User.Controllers
{
    [Area(Roles.User)]
    [Authorize(Roles =Roles.User)]
    public class ChangePasswordController(UserManager<AppUser> _userManager
                                          ,SignInManager<AppUser> _signInManager) : Controller
    {
        
        public IActionResult ChangePassword()
        {

            return View();

        }

        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordDto passwordDto)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            if(!ModelState.IsValid)
            {
                return View(passwordDto);
            }
             
            var result=await _userManager.ChangePasswordAsync(user, passwordDto.CurrentPassword,passwordDto.NewPassword);

            if(!result.Succeeded)
            {
                foreach(var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);

                }
                return View(passwordDto);

            }

            //değiştiği otomaytık sekılde kulanıcıyı at
            await _signInManager.SignOutAsync();

            return RedirectToAction("Index", "Login", new { area = string.Empty });


            

        }





    }
}









