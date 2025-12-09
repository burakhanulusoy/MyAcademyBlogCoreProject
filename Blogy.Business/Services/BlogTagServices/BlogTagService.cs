using AutoMapper;
using Blogy.Business.DTOs.BlogTagDtos;
using Blogy.DataAccess.Repositories.BlogTagRepositories;

namespace Blogy.Business.Services.BlogTagServices
{
    public class BlogTagService(IBlogTagRepository _blogTagRepository, IMapper _mapper) : IBlogTagService
    {
        public async Task<List<ResultBlogTagDto>> GetBlogTagWithBlogByUserIdAsync(int id)
        {
            var blog = await _blogTagRepository.GetBlogTagWithBlogByUserIdAsync(id);
            return _mapper.Map<List<ResultBlogTagDto>>(blog);

        }
    }
}
