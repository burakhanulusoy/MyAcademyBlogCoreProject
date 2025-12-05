using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}
