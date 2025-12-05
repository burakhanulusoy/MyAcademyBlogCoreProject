using AutoMapper;
using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Blogy.WebUI.Areas.Admin.Controllers
{
    [Area(Roles.Admin)] 
    [Authorize(Roles =Roles.Admin)]
    public class UsersController(UserManager<AppUser> _userManager,IMapper _mapper,RoleManager<AppRole> _roleManager) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var users=await _userManager.Users.ToListAsync();//tüm kullanıcıları aldık
            var mappedUsers=_mapper.Map<List<ResultUserDto>>(users);//dto mapledik
             
            foreach(var user in users)//tüm kullancılar içinde dönüyoruz
            {
                var UserRoles=await _userManager.GetRolesAsync(user);//kullanıcıların rollerini alıyıryz
               mappedUsers.Find(x=>x.Id==user.Id).Roles=UserRoles;


            }


             return View(mappedUsers);           

        }



        public async Task<IActionResult> AssignRole(int id)
        {

            var user = await _userManager.FindByIdAsync(id.ToString());//kullanıcıyı bulduk o seçilen
            var roles=await _roleManager.Roles.ToListAsync();//tüm rolleri aldık

            var UserRoles = await _userManager.GetRolesAsync(user);//kullanıcın rolunu bulduk
            
            var assignRoleList=new List<AssignRoleDto>();//rol atayacagımiz için liste yaptık

            foreach(var role in roles)//tüm rollerin içinde
            {
                assignRoleList.Add(new AssignRoleDto
                {
                    RoleId = role.Id,
                    RoleName = role.Name,
                    Id = user.Id,
                    RoleExists = UserRoles.Contains(role.Name)
                });

            }

            ViewBag.UserName=user.FirstName+user.LastName;

            return View(assignRoleList);
        }

        [HttpPost]
        public async Task<IActionResult> AssignRole(List<AssignRoleDto> assignRole)
        {

            var userId = assignRole.Select(x => x.Id).FirstOrDefault();
            var user = await _userManager.FindByIdAsync(userId.ToString());


            foreach(var role in assignRole)
            {
                if(role.RoleExists)//check ise true
                {
                    await _userManager.AddToRoleAsync(user, role.RoleName);
                }
                else
                {
                    await _userManager.RemoveFromRoleAsync(user, role.RoleName);
                }
            }

            return RedirectToAction("Index");


        }

        public async Task<IActionResult> DeleteUsers(int id)
        {
            var user=await _userManager.FindByIdAsync(id.ToString());
            await _userManager.DeleteAsync(user);
            return RedirectToAction("Index"); 

        }


        public async Task<IActionResult> GetUserInformation(int id)
        {

            var user = await _userManager.FindByIdAsync(id.ToString());
            ViewBag.ToxicblogCount=user.Blogs.Where(x=>x.ToxicityValue==2).Count();
            ViewBag.NonToxicblogCount=user.Blogs.Where(x=>x.ToxicityValue==1).Count();
            ViewBag.NoCheckedblogCount=user.Blogs.Where(x=>x.ToxicityValue==0).Count();
            ViewBag.CommentsCount=user.Comments.Count();
            ViewBag.blogsCount=user.Blogs.Count();

          

            var mappedUser=_mapper.Map<ResultUserDto>(user);
            return View(mappedUser);



        }




    }
}












