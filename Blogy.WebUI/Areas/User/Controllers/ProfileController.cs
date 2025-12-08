using AutoMapper;
using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.User.Controllers
{
    [Area(Roles.User)]
    [Authorize(Roles =Roles.User)]

    public class ProfileController(UserManager<AppUser> _userManager,IMapper _mapper) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var editUser=_mapper.Map<EditProfileDto>(user);



            return View(editUser);
        }
        [HttpPost]
        public async Task<IActionResult> Index(EditProfileDto profileDto)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var passwordCheck = await _userManager.CheckPasswordAsync(user, profileDto.CurrentPassword);


            //şifre kontrolü

            if(!passwordCheck)
            {
                ModelState.AddModelError(" ", "Girilen şifreniz hatalı ,lütfen kontrol edin !");
                return View(profileDto);
            }

            if(profileDto.ImageFile is not null)
            {

                var currentDirectory=Directory.GetCurrentDirectory();//proje dizini alıyor c:/admin/myacademyprohject/...
                var extension = Path.GetExtension(profileDto.ImageFile.FileName);//.jpeg .png yakalıyor
                var ImageName = Guid.NewGuid() + extension;//rastgele uniqe bir ad üretiyor
                var saveLocation = Path.Combine(currentDirectory, "wwwroot/UserImagess", ImageName);
                using var stream = new FileStream(saveLocation, FileMode.Create);
                await profileDto.ImageFile.CopyToAsync(stream);
                user.ImageUrl = "/UserImagess/" + ImageName;
            }

            user.FirstName = profileDto.FirstName;
            user.LastName = profileDto.LastName;
            user.Email = profileDto.Email;
            user.PhoneNumber = profileDto.PhoneNumber;
            user.UserName = profileDto.UserName;
            user.Title = profileDto.Title;
            user.City = profileDto.City;
            user.Country = profileDto.Country;
            user.InstagramLink = profileDto.InstagramLink;
            user.GithubLink = profileDto.GithubLink;
            user.LinkedlnLink = profileDto.LinkedlnLink;

            var result=await _userManager.UpdateAsync(user);
            if(!result.Succeeded)
            {
                ModelState.AddModelError(" ", "Güncellem başarısız lütfen kontrol edin bilgilerinizi.");
            }

            return RedirectToAction("Index", "Blog",new {area=Roles.User});




        }




    }
}
