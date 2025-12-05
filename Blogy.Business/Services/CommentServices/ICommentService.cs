using Blogy.Business.DTOs.CommentDtos;
using Blogy.Business.Services.GenericServices;
using Blogy.Entity.Entities;

namespace Blogy.Business.Services.CommentServices
{
    public interface ICommentService:IGenericService<Comment,ResultCommentDto,UpdateCommentDto,CreateCommentDto>
    {



    }
}
