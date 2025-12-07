using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Controllers
{
    public class UserUIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
