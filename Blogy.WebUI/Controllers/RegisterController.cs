using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.Controllers
{
    public class RegisterController(UserManager<AppUser> _userManager) : Controller
    {
        public IActionResult SignUp()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> SignUp(RegisterDto model)
        {
            if(!ModelState.IsValid)
            {
                return View(model);
            }

            var user = new AppUser
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                UserName = model.UserName,
                Email = model.Email
            };


            var result=await _userManager.CreateAsync(user,model.Password);

            if(!result.Succeeded)
            {
                foreach(var error in result.Errors)
                {

                    ModelState.AddModelError(error.Code,error.Description);
                }
                return View(model);

            }

            await _userManager.AddToRoleAsync(user, Roles.User);

            return RedirectToAction("Index", "Login");
        }









    }
}
