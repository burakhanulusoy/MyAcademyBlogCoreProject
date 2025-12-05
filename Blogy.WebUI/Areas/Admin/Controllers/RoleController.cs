using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]

    public class RoleController(RoleManager<AppRole> _roleManager,UserManager<AppUser> _userManager) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var roles=await _roleManager.Roles.ToListAsync();

           ViewBag.AdminRoleCount = (await _userManager.GetUsersInRoleAsync("Admin")).Count;
           ViewBag.WriterRoleCount = (await _userManager.GetUsersInRoleAsync("Writer")).Count;
           ViewBag.UserRoleCount = (await _userManager.GetUsersInRoleAsync("User")).Count;




            return View(roles);
        }
        
        public IActionResult CreateRole()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole(AppRole model)
        {
            var result =await _roleManager.CreateAsync(model);
            if(!result.Succeeded)
            {
                foreach(var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code,error.Description);
                }
                return View(model);

            }

            return RedirectToAction("Index");

        }

        public async Task<IActionResult> DeleteRole(int id)
        {
            var role = await _roleManager.FindByIdAsync(id.ToString());
               await _roleManager.DeleteAsync(role);

            return RedirectToAction("Index");
        }





    }
}
