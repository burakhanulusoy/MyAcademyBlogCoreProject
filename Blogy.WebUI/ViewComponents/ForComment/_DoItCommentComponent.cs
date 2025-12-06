using Blogy.Business.DTOs.CommentDtos;
using Blogy.Business.Services.CommentServices;
using Blogy.Entity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;

namespace Blogy.WebUI.ViewComponents.ForComment
{
    public class _DoItCommentComponent(ICommentService _commentService):ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(int id)
        {
            ViewBag.BlogId = id;
            return View();
            


        }


        




       



    }
}
