using Blogy.Business.DTOs.BlogDtos;
using Blogy.Business.Services.GenericServices;
using Blogy.Entity.Entities;

namespace Blogy.Business.Services.BlogServices
{
    public interface IBlogService:IGenericService<Blog,ResultBlogDto,UpdateBlogDto,CreateBlogDto>
    {



        // for user and writer panels

        Task<List<ResultBlogDto>> GetBlogsWithUserIdAsync(int id);
        Task<List<ResultBlogDto>> GetBlogsWithUserIdNonToxicAsync(int id);
        Task<List<ResultBlogDto>> GetBlogsWithUserIdToxicAsync(int id);
        Task<List<ResultBlogDto>> GetBlogsWithUserIdAdminNonCheckedAsync(int id);
        Task<List<ResultBlogDto>> GetBlogxNonToxicByUserIdAsync(int id);
        Task<List<ResultBlogDto>> GetBlogxToxicByUserIdAsync(int id);
        Task<List<ResultBlogDto>> GetBlogsAdminNonCheckedByUserIdAsync(int id);


        //uı katmanına lazım
        Task<List<ResultBlogDto>> GetBlogsWithCategoriesNonToxicAsync();
        Task<List<ResultBlogDto>> GetBlogsWithCategoriesAsync();
        Task<List<ResultBlogDto>> GetBlogWithTagsTheMostTag3Async();



        //for statsticks
        Task<List<ResultBlogDto>> GetBlogsWithAllSettingsLast5Async();



        Task<List<ResultBlogDto>> GetBlogsWithCategoryIdAsync(int id);

        Task<List<ResultBlogDto>> GetLast3BlogsAsync();

        Task<List<ResultBlogDto>> GetBlogsWithTags();

        Task<UpdateBlogDto> GetBlogByIdWithTagsAsync(int id);


        //bunlar şu yüzden lazım admin onaylı yazıları onaysız yazıları gorsun bırde kontrol etmediklerini görsün 
        Task<List<ResultBlogDto>> GetBlogxNonToxicAsync();
        Task<List<ResultBlogDto>> GetBlogxToxicAsync();
        Task<List<ResultBlogDto>> GetBlogsAdminNonCheckedAsync();




    }
}
