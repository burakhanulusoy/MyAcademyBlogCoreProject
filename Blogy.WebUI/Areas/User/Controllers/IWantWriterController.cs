using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.User.Controllers
{
    [Area(Roles.User)]
    [Authorize(Roles =Roles.User)]
    public class IWantWriterController(UserManager<AppUser> _userManager) : Controller
    {

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            // Eğer kullanıcı zaten talep gönderdiyse butonu pasif yapmak için bilgiyi View'a taşıyalım
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            ViewBag.IsRequestSent = user.DoYouWantWriter;

            return View();
        }


        [HttpPost]
        public async Task<IActionResult> SendRequest()
        {
           
           
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            if (user == null) return Json(new { success = false, message = "Kullanıcı bulunamadı." });

            // Alanı True yapıyoruz
            user.DoYouWantWriter = true;

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                return Json(new { success = true, message = "Başvurunuz alındı." });
            }

            return Json(new { success = false, message = "Bir hata oluştu." });





        }


    }
}
