using Blogy.Business.DTOs.CommentDtos;
using Blogy.Business.Services.CommentServices;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PagedList.Core;
using System.Threading.Tasks;



namespace Blogy.WebUI.Areas.User.Controllers
{
    [Area(Roles.User)]
    [Authorize(Roles = Roles.User)]
    public class CommentController(ICommentService _commentService,UserManager<AppUser> _userManager) : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> GetCommentByBlogId(int id)
        {
            var comments=await _commentService.GetCommentBlogIdAsync(id);
            return View(comments);

        }

        public async Task<IActionResult> GetUserComment(int page=1,int pageSize=16)
        {
            var user=await _userManager.FindByNameAsync(User.Identity.Name);

            var comments=await _commentService.GetUserCommentWithBlogAsync(user.Id);

            var values=new PagedList<ResultCommentDto>(comments.AsQueryable(),page,pageSize);

            return View(values);

        }

        public async Task<IActionResult> DeleteComment(int id)
        {

            await _commentService.DeleteAsync(id);
            return RedirectToAction(nameof(GetUserComment));

        }






    }
}
