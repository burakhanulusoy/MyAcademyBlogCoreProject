using Blogy.Business.DTOs.OurTeamDtos;
using Blogy.Business.Services.OurTeamServices;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area(Roles.Admin)]
    [Authorize(Roles =Roles.Admin)]
    public class OurTeamController(IOurTeamService _ourTeamService) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var teamMembers=await _ourTeamService.GetAllAsync();
            return View(teamMembers);
        }

        public async Task<IActionResult> DeleteOurTeam(int id)
        {
            await _ourTeamService.DeleteAsync(id);
            return RedirectToAction(nameof(Index));
        }

        public IActionResult CreateOurTeam()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateOurTeam(CreateOurTeamDto createOurTeamDto)
        {
           
            await _ourTeamService.CreateAsync(createOurTeamDto);
            return RedirectToAction(nameof(Index));

        }

        public async Task<IActionResult> UpdateOurTeam(int id)
        {

            var team=await _ourTeamService.GetByIdAsync(id);
            return View(team);


        }

        [HttpPost]
        public async Task<IActionResult> UpdateOurTeam(UpdateOurTeamDto updateOurTeamDto)
        {

            await _ourTeamService.UpdateAsync(updateOurTeamDto);
            return RedirectToAction(nameof(Index));


        }

















    }
}
