using Blogy.Business.DTOs.SocialMediaDtos;
using Blogy.Business.Services.SocialMediaServices;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.Admin.Controllers
{

    [Area(Roles.Admin)]
    [Authorize(Roles =Roles.Admin)]
    public class SocialMediaController(ISocialMediaService _socialMediaService) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var socialMedia=await _socialMediaService.GetAllAsync();
            return View(socialMedia);
        }

        public async Task<IActionResult> DeleteSocialMedia(int id)
        {
            await _socialMediaService.DeleteAsync(id);
            return RedirectToAction(nameof(Index));

        }
        public IActionResult CreateSocialMedia()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateSocialMedia(CreateSocialMediaDto createSocialMediaDto)
        {
            await _socialMediaService.CreateAsync(createSocialMediaDto);
            return RedirectToAction(nameof(Index));
        }


        public async Task<IActionResult> UpdateSocialMedia(int id)
        {
            var socialMedia=await _socialMediaService.GetByIdAsync(id);
            return View(socialMedia);

        }

        [HttpPost]
        public async Task<IActionResult> UpdateSocialMedia(UpdateSocialMediaDto updateSocialMediaDto)
        {
            
            await _socialMediaService.UpdateAsync(updateSocialMediaDto);
            return RedirectToAction(nameof(Index));


        }













    }
}
