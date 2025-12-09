using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blogy.DataAccess.Repositories.BlogRepositories
{
    public class BlogRepository : GenericRepository<Blog>, IBlogRepository
    {
        public BlogRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<Blog>> GetAllBlogsOrderLastAsync()
        {
            return await _table
                .Include(x => x.Writer)
                .Include(x => x.Category)
                .OrderByDescending(x => x.Id)
                .ToListAsync();
        }


        public async Task<Blog> GetBlogByIdWithTagsAsync(int id)
        {


            return await _table.Include(x => x.BlogTags)
                               .Where(x => x.Id == id)
                               .FirstOrDefaultAsync();


        }

        public async Task<List<Blog>> GetBlogsAdminNonCheckedAsync()
        {
            
            return await _table.Where(x=>x.ToxicityValue==0).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogsAdminNonCheckedByUserIdAsync(int id)
        {
            return await _table.Include(x => x.Writer).Where(x=>x.WriterId==id && x.ToxicityValue==0).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogsWithAllSettingsLast5Async()
        {

            return await _table.OrderByDescending(x => x.Id).Include(x => x.Category)
                                                          .Include(x => x.Writer).Take(5).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogsWithCategoriesAsync()
        {
            
            return await _table.Include(x=>x.Category).ToListAsync();



        }

        public async Task<List<Blog>> GetBlogsWithCategoriesNonToxicAsync()
        {
           
            return await _table.Include(x=>x.Category).Where(x=>x.ToxicityValue==1).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogsWithUserIdAdminNonCheckedAsync(int id)
        {
            
            return await _table.Include(x=>x.Category)
                               .Where(x=>x.WriterId==id && x.ToxicityValue==0).ToListAsync();

        }

        public async Task<List<Blog>> GetBlogsWithUserIdAsync(int id)
        {
           
            return await _table.Include(x=>x.Category)
                                .Include(x=>x.BlogTags)
                                .Where(x=>x.WriterId==id).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogsWithUserIdNonToxicAsync(int id)
        {
            return await _table.Include(x=>x.Category)
                               .Where(x=>x.WriterId==id && x.ToxicityValue==1).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogsWithUserIdToxicAsync(int id)
        {
            return await _table.Include(x=>x.Category)
                               .Where(x=>x.WriterId==id && x.ToxicityValue==2).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogWithTagsAsync()
        {
           return await _table.Include(x=>x.BlogTags).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogWithTagsTheMostTag3Async()
        {
            return await _table.Include(x => x.BlogTags).OrderByDescending(x => x.BlogTags.Count).Take(3).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogxNonToxicAsync()
        {
            
            return await _table.Where(x=>x.ToxicityValue == 1).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogxNonToxicByUserIdAsync(int id)
        {
            return await _table.Include(x=>x.Writer).Where(x=>x.WriterId==id && x.ToxicityValue==1).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogxToxicAsync()
        {
            return await _table.Where(x=>x.ToxicityValue==2).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogxToxicByUserIdAsync(int id)
        {
          return await _table.Include(x=>x.Writer).Where(x=>x.WriterId==id && x.ToxicityValue==2).ToListAsync();
        }

        public async Task<List<Blog>> GetLast3BlogsAsync()
        {
           
            var blogs=await _table.OrderByDescending(x=>x.Id).Where(x=>x.ToxicityValue==1).Take(5).ToListAsync();
            return blogs;

        }
    }
}
