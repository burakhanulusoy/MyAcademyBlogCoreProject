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

        public async Task<List<Comment>> GetLast5CommentAsync()
        {

            return await _table.OrderByDescending(x => x.Id).Include(x=>x.User).Take(5).ToListAsync();

        }
    }
}
