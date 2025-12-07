using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.User.Controllers
{
    [Area(Roles.User)]
    [Authorize(Roles =Roles.User)]
    public class StaticksController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
