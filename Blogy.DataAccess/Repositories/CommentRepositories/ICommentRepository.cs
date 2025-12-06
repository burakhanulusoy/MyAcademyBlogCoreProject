using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;

namespace Blogy.DataAccess.Repositories.CommentRepositories
{
    public interface ICommentRepository:IGenericRepository<Comment>
    {


        Task<List<Comment>> GetLast5CommentAsync();




    }
}
