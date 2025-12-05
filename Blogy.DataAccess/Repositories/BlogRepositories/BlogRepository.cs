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

        public async Task<List<Blog>> GetBlogsWithCategoriesAsync()
        {
            
            return await _table.Include(x=>x.Category).ToListAsync();



        }

        public async Task<List<Blog>> GetBlogWithTagsAsync()
        {
           return await _table.Include(x=>x.BlogTags).ToListAsync();
        }

        public async Task<List<Blog>> GetBlogxNonToxicAsync()
        {
            
            return await _table.Where(x=>x.ToxicityValue == 1).ToListAsync();


        }

        public async Task<List<Blog>> GetBlogxToxicAsync()
        {
            return await _table.Where(x=>x.ToxicityValue==2).ToListAsync();
        }

        public async Task<List<Blog>> GetLast3BlogsAsync()
        {
           
            var blogs=await _table.OrderByDescending(x=>x.Id).Take(5).ToListAsync();
            return blogs;

        }
    }
}
