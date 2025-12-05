using Blogy.Business.DTOs.CategoryDtos;
using Blogy.Business.Services.CategoryServices;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Humanizer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]

    public class CategoryController(ICategoryService _categoryService,UserManager<AppUser> _userManager) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var categories = await _categoryService.GetAllCategoryAsync();
            return View(categories);

        }

        public async Task<IActionResult> CreateCategory()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            ViewBag.userName=user.FirstName+" "+user.LastName;

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryDto createCategoryDto)
        {


            if (!ModelState.IsValid)
            {
                return View(createCategoryDto);
            }

            try
            {
                var user = await _userManager.FindByNameAsync(User.Identity.Name);
                createCategoryDto.Creator=user.FirstName+" "+user.LastName;
                await _categoryService.CreateCategoryAsync(createCategoryDto);
                return RedirectToAction("Index");

            }
            catch(Exception ex)
            {
                ModelState.AddModelError("Name", ex.Message);
                return View(createCategoryDto);
            }



        }


        public async Task<IActionResult> DeleteCategory(int id)
        {
            await  _categoryService.DeleteCategoryAsync(id);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public async Task<IActionResult> UpdateCategory(int id)
        {
            var category = await _categoryService.GetByIdCategoryAsync(id);
            return View(category);

        }
        [HttpPost]
        public async Task<IActionResult> UpdateCategory(UpdateCategoryDto updateCategoryDto)
        {
            if(!ModelState.IsValid)
            {
              return View(updateCategoryDto);
            }
            try
            {
                var user = await _userManager.FindByNameAsync(User.Identity.Name);
                updateCategoryDto.Creator = user.FirstName + " " + user.LastName;
                await _categoryService.UpdateCategoryAsync(updateCategoryDto);
                return RedirectToAction(nameof(Index));

            }
            catch(Exception ex)
            {
                ModelState.AddModelError("Name", ex.Message);
                return View(updateCategoryDto);
            }


          

        }


    }
}
