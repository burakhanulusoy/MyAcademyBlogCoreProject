using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blogy.DataAccess.Repositories.CommentRepositories
{
    public class CommentRepository : GenericRepository<Comment>, ICommentRepository
    {
        public CommentRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<Comment>> GetCommentBlogIdAsync(int id)
        {
            return await _table.Include(x => x.Blog).Where(x => x.BlogId == id).ToListAsync();

        }

        public async Task<List<Comment>> GetCommentUserIdAsync(int id)
        {
            return await _table.Include(x=>x.Blog).Where(x=>x.Blog.WriterId == id).ToListAsync();
        }

        public async Task<List<Comment>> GetLast5CommentAsync()
        {

            return await _table.OrderByDescending(x => x.Id).Include(x=>x.User).Take(5).ToListAsync();

        }

        public async Task<int> GetUserCommentCount(int id)
        {
            return await _table.Where(x => x.Blog.WriterId == id).CountAsync();

        }

        public async Task<List<Comment>> GetUserCommentWithBlogAsync(int id)
        {
           return await _table.Include(x=>x.Blog).Where(x=>x.UserId == id).ToListAsync();
        }
    }
}
