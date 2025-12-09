using AutoMapper;
using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Blogy.WebUI.ViewComponents.GetInfoForUserAdminWriter
{
    public class _Last5ListsOfWantsWriterComponent(UserManager<AppUser> _userManager,IMapper _mapper):ViewComponent
    {

       public async Task<IViewComponentResult> InvokeAsync()
        {

            var users = await _userManager.Users.Where(x => x.DoYouWantWriter == true).Take(5).ToListAsync();
            var mappedUsers = _mapper.Map<List<ResultUserDto>>(users);
            return View(mappedUsers);
        }












    }
}
