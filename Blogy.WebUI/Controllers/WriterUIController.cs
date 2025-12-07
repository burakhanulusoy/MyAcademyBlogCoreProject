using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Controllers
{
    public class WriterUIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
