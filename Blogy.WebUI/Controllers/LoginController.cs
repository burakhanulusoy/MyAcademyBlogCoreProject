using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.Controllers
{
    public class LoginController(SignInManager<AppUser> _signInManager,UserManager<AppUser> _userManager) : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(LoginDto model)
        {
            var result=await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);


            if (!result.Succeeded)
            {
                ModelState.AddModelError("","Kullanıcı adı veya şifreniz hatalı!");
                return View(model);
            }

          
            var user=await _userManager.FindByNameAsync(model.UserName);

            var roles = await _userManager.GetRolesAsync(user);

            if (roles.Contains("Admin"))
            {
                return RedirectToAction("Index", "Staticks", new { area = "Admin" });
            }
            if (roles.Contains("Writer"))
            {
                return RedirectToAction("Index", "Staticks", new { area = "Writer" });
            }
            if (roles.Contains("User"))
            {
                return RedirectToAction("Index", "Blog", new { area = "User" });
            }


            return RedirectToAction("Index", "Home");

        }












    }
}
