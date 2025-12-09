using Blogy.Business.DTOs.BlogTagDtos;
using Blogy.Entity.Entities;

namespace Blogy.Business.Services.BlogTagServices
{
    public interface IBlogTagService
    {

        Task<List<ResultBlogTagDto>> GetBlogTagWithBlogByUserIdAsync(int id);



    }
}
