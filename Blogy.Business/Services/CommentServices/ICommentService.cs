using Blogy.Business.DTOs.CommentDtos;
using Blogy.Business.Services.GenericServices;
using Blogy.Entity.Entities;

namespace Blogy.Business.Services.CommentServices
{
    public interface ICommentService:IGenericService<Comment,ResultCommentDto,UpdateCommentDto,CreateCommentDto>
    {
        Task<List<ResultCommentDto>> GetLast5CommentAsync();
        Task<List<ResultCommentDto>> GetCommentBlogIdAsync(int id);



        Task<List<ResultCommentDto>> GetUserCommentWithBlogAsync(int id);



    }
}
