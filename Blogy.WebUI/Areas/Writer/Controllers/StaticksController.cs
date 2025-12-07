using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.Writer.Controllers
{
    [Area(Roles.Writer)]
    [Authorize(Roles =Roles.Writer)]
    public class StaticksController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
