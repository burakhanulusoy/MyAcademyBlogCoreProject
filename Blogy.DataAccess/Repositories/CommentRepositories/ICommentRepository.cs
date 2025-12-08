using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;

namespace Blogy.DataAccess.Repositories.CommentRepositories
{
    public interface ICommentRepository:IGenericRepository<Comment>
    {


        Task<List<Comment>> GetLast5CommentAsync();

        //for user and writer
        Task<List<Comment>> GetCommentBlogIdAsync(int id);

        Task<List<Comment>> GetUserCommentWithBlogAsync(int id);



    }
}
