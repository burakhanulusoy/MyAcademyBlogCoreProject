using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Controllers
{
    public class AdminUIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
