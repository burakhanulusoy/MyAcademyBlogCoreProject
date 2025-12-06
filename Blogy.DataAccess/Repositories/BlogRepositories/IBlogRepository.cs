using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;

namespace Blogy.DataAccess.Repositories.BlogRepositories
{
    public interface IBlogRepository:IGenericRepository<Blog>
    {


        Task<List<Blog>> GetBlogsWithCategoriesAsync();

        //for statsticks
        Task<List<Blog>> GetBlogsWithAllSettingsLast5Async();
       
        
        
        Task<List<Blog>> GetLast3BlogsAsync();

        Task<List<Blog>> GetBlogWithTagsAsync();
        Task<Blog> GetBlogByIdWithTagsAsync(int id);


        //bunlar şu yüzden lazım admin onaylı yazıları onaysız yazıları gorsun bırde kontrol etmediklerini görsün 
        Task<List<Blog>> GetBlogxNonToxicAsync(); 
        Task<List<Blog>> GetBlogxToxicAsync(); 
        Task<List<Blog>> GetBlogsAdminNonCheckedAsync(); 




    }
}
