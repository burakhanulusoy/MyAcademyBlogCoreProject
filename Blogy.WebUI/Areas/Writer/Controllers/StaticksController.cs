using AutoMapper;
using Blogy.Business.DTOs.BlogTagDtos;
using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.BlogTagServices;
using Blogy.Business.Services.CommentServices;
using Blogy.Entity.Entities;
using Blogy.WebUI.Consts;
using Humanizer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Blogy.WebUI.Areas.Writer.Controllers
{
    [Area(Roles.Writer)]
    [Authorize(Roles =Roles.Writer)]
    public class StaticksController(UserManager<AppUser> _userManager,
                                    IBlogService _blogService,
                                    ICommentService _commentService,
                                    IBlogTagService _blogTagService,
                                    IMapper _mapper ) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            ViewBag.Name=user.FirstName+" "+user.LastName;

            ViewBag.UserAllBlogCount = (await _blogService.GetBlogsWithUserIdAsync(user.Id)).Count();

            ViewBag.UserCommentCount = await _commentService.GetUserCommentCountAsync(user.Id);

            ViewBag.UserBlogNonCheckedCount = (await _blogService.GetBlogsWithUserIdAdminNonCheckedAsync(user.Id)).Count();
         
            ViewBag.UserBlogNonToxicCount = (await _blogService.GetBlogsWithUserIdNonToxicAsync(user.Id)).Count();

            ViewBag.UserAllBlogWithCategory = await _blogService.GetBlogsWithUserIdAsync(user.Id);
         

            var blogtag=await _blogTagService.GetBlogTagWithBlogByUserIdAsync(user.Id);


            var mappdeTag = _mapper.Map<List<ResultBlogTagDto>>(blogtag);

            // --- YENİ EKLENECEK KISIM ---

            // 1. Tag ismine göre grupla ve say (ResultTagDto içinde 'Name' veya 'TagName' olduğunu varsayıyorum)
            var tagStats = mappdeTag
                .GroupBy(x => x.Tag.Name) // Not: Tag nesnenizdeki isim alanı 'Name' ise burayı düzeltin
                .Select(g => new
                {
                    Name = g.Key,
                    Count = g.Count()
                })
                .OrderByDescending(x => x.Count) // En çok kullanılanlar başta olsun
                .ToList();

            // 2. İsimleri ve Sayıları ayrı listeler halinde ViewBag'e at
            ViewBag.TagNames = tagStats.Select(x => x.Name).ToList();
            ViewBag.TagCounts = tagStats.Select(x => x.Count).ToList();
            ViewBag.TotalTagCount = tagStats.Sum(x => x.Count); // Ortadaki toplam sayı için


            ViewBag.Country = user.Country;
            ViewBag.City=user.City;




            return View();
       
        }




    }
}
