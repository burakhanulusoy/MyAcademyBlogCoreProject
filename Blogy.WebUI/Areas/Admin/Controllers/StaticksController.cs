using Blogy.Business.Services.BlogServices;
using Blogy.Business.Services.CommentServices;
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
    public class StaticksController(UserManager<AppUser> _userManager,IBlogService _blogService,ICommentService _commentService) : Controller
    {
        public async Task<IActionResult> Index()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            ViewBag.userName = user.UserName;
            ViewBag.userBlogCount=user.Blogs.Count;
            ViewBag.userCommentCount=user.Comments.Count;
           
            ViewBag.userCount=await _userManager.Users.CountAsync();

            ViewBag.userCountHaveBlog=await _userManager.Users.Where(x=>x.Blogs.Count>0).CountAsync();

            ViewBag.BlogCount = (await _blogService.GetAllAsync()).Count();
            ViewBag.ToxicBlogCount = (await _blogService.GetAllAsync(x=>x.ToxicityValue==2)).Count();
            ViewBag.NonToxicBlogCount = (await _blogService.GetAllAsync(x=>x.ToxicityValue==1)).Count();
            ViewBag.WaitAdminBlogCount = (await _blogService.GetAllAsync(x=>x.ToxicityValue==0)).Count();

            ViewBag.GetLast5CommentList = await _commentService.GetLast5CommentAsync();

            var blogs = await _blogService.GetBlogsWithCategoriesAsync();

            var categoryStats = blogs
                                  .GroupBy(x => x.Category.CategoryName)
                                  .Select(g => new
                                  {
                                      CategoryName = g.Key,
                                      BlogCount = g.Count()
                                  })
                                  .ToList();

            ViewBag.CategoryNames = categoryStats.Select(x => x.CategoryName).ToList();
            ViewBag.BlogCounts = categoryStats.Select(x => x.BlogCount).ToList();



            //kullanıcı yorum orannni olursa?
            ViewBag.HaveBlog = await _userManager.Users.CountAsync(u => u.Blogs.Count > 0);
            ViewBag.NoBlog = await _userManager.Users.CountAsync(u => u.Blogs.Count == 0);


            ViewBag.last5Blog=await _blogService.GetBlogsWithAllSettingsLast5Async();











            //ai yapti
            // ... (Diğer kodların aynı kalsın) ...

            // 1. ÖNCE BU SÖZLÜĞÜ OLUŞTUR (Türkçe İsim -> Harita Kodu)
            // En çok kullanıcın olabilecek ülkeleri buraya eklemelisin.
            // Harita kodları (ISO 3166-1 alpha-2) standarttır.
            var countryCodeMapping = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
    {
        { "Türkiye", "TR" },
        { "Turkey", "TR" }, // İngilizcesi de varsa diye
        { "Amerika Birleşik Devletleri", "US" },
        { "ABD", "US" },
        { "Almanya", "DE" },
        { "Azerbaycan", "AZ" },
        { "Fransa", "FR" },
        { "İngiltere", "GB" },
        { "Birleşik Krallık", "GB" },
        { "Rusya", "RU" },
        { "Hollanda", "NL" },
        { "İtalya", "IT" },
        { "İspanya", "ES" },
        { "Kanada", "CA" }
        // Diğer ülkeleri ihtiyacına göre ekleyebilirsin
    };

            // 2. Veritabanından Kullanıcıları Çek (Gruplanmış olarak)
            var rawUserLocationData = await _userManager.Users
                .Where(u => u.Country != null)
                .GroupBy(u => u.Country)
                .Select(g => new
                {
                    CountryName = g.Key,
                    UserCount = g.Count()
                })
                .ToListAsync();

            // 3. Verileri Harita Koduna Çevir
            var mapDataDictionary = new Dictionary<string, int>(); // Harita için (Kodlu)
            var chartDataList = new List<object>(); // Grafik için (İsimli)

            foreach (var item in rawUserLocationData)
            {
                // Sözlükte bu ülkenin karşılığı var mı?
                if (countryCodeMapping.TryGetValue(item.CountryName, out string code))
                {
                    // Varsa harita verisine KOD (TR) olarak ekle
                    mapDataDictionary[code] = item.UserCount;

                    // Grafik verisine normal isim ve sayıyı ekle
                    chartDataList.Add(new { Country = item.CountryName, Count = item.UserCount });
                }
                else
                {
                    // Sözlükte yoksa (Örn: "Brezilya" veritabanında var ama yukarıya eklemedin)
                    // İstersen loglayabilirsin. Şimdilik pas geçiyoruz.
                }
            }

            // Listeyi çoktan aza sırala (Grafik düzgün görünsün diye)
            chartDataList = chartDataList.OrderByDescending(x => ((dynamic)x).Count).Take(6).ToList();

            // 4. View'a Gönder
            // HARİTA İÇİN: { "TR": 50, "US": 20 } formatında gidiyor
            ViewBag.MapData = Newtonsoft.Json.JsonConvert.SerializeObject(mapDataDictionary);

            // BAR CHART İÇİN: İsimler ve Sayılar ayrı gidiyor
            ViewBag.CountryLabels = Newtonsoft.Json.JsonConvert.SerializeObject(chartDataList.Select(x => ((dynamic)x).Country));
            ViewBag.CountryCounts = Newtonsoft.Json.JsonConvert.SerializeObject(chartDataList.Select(x => ((dynamic)x).Count));

            return View();
        }

        
      
    }
}
