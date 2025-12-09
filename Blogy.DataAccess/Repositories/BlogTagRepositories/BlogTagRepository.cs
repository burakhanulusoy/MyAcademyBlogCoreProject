using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blogy.DataAccess.Repositories.BlogTagRepositories
{
    public class BlogTagRepository : GenericRepository<BlogTag>, IBlogTagRepository
    {
        public BlogTagRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<BlogTag>> GetBlogTagWithBlogByUserIdAsync(int id)
        {
            return await _table
                .Include(x=>x.Tag)
                .Include(x => x.Blog).Where(x => x.Blog.WriterId == id).ToListAsync();
        }
    }
}
