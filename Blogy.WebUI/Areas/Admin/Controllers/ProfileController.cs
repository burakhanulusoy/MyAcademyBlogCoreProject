using AutoMapper;
using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area(Roles.Admin)]
    [Authorize(Roles=Roles.Admin)]
    public class ProfileController(UserManager<AppUser> _userManager,IMapper _mapper) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var editUser = _mapper.Map<EditProfileDto>(user);
            return View(editUser);
        }

        [HttpPost]
        public async Task<IActionResult> Index(EditProfileDto profileDto)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);//kullanıcı bulduk

            var passwordCheck=await _userManager.CheckPasswordAsync(user,profileDto.CurrentPassword);

            if(!passwordCheck)
            {
                ModelState.AddModelError("", "Girilen şifreniz hatalı! Lütfen şifrenizi giriniz.");
                return View(profileDto);
            }

            if(profileDto.ImageFile is not null)
            {

                var currentDirectory = Directory.GetCurrentDirectory();//proje dizini aldık dosyada c:\users\source\myacademyblogy\blogy\webuı gıbı bısey

                var extension = Path.GetExtension(profileDto.ImageFile.FileName);//.jpeg .png aldık

                var imageName=Guid.NewGuid() + extension;//uniqe ad yapıyoruz

                var saveLocation = Path.Combine(currentDirectory, "wwwroot/UserImagess",imageName);//kaydetme yeri

                using var stream = new FileStream(saveLocation, FileMode.Create);

                await profileDto.ImageFile.CopyToAsync(stream);

                user.ImageUrl = "/UserImagess/" + imageName;

            }

            user.FirstName = profileDto.FirstName;
            user.LastName = profileDto.LastName;
            user.Email = profileDto.Email;
            user.PhoneNumber = profileDto.PhoneNumber;
            user.UserName = profileDto.UserName;
            user.Title = profileDto.Title;
            user.City=profileDto.City;
            user.Country = profileDto.Country;
            user.InstagramLink = profileDto.InstagramLink;
            user.GithubLink = profileDto.GithubLink;
            user.LinkedlnLink = profileDto.LinkedlnLink;

           

            var result=await _userManager.UpdateAsync(user);

            if(!result.Succeeded)
            {

                ModelState.AddModelError("", "Güncelleme esnasında hata oluştu kontrol ediniz.");
                return View(profileDto);
            }


            return RedirectToAction("Index", "Blog",new {area=Roles.Admin});




        }

         








    }
}
