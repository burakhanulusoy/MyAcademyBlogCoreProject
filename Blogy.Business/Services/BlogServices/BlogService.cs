using AutoMapper;
using Blogy.Business.DTOs.BlogDtos;
using Blogy.DataAccess.Repositories.BlogRepositories;
using Blogy.Entity.Entities;
using System.Linq.Expressions;

namespace Blogy.Business.Services.BlogServices
{
    public class BlogService : IBlogService
    {

        private readonly IBlogRepository _blogRepository;
        private readonly IMapper _mapper;

        public BlogService(IBlogRepository blogRepository, IMapper mapper)
        {
            _blogRepository = blogRepository;
            _mapper = mapper;
        }

        public async Task CreateAsync(CreateBlogDto createDto)
        {
           var blog=_mapper.Map<Blog>(createDto);

            if (createDto.SelectedTagIds != null && createDto.SelectedTagIds.Count > 0)
            {
                blog.BlogTags = new List<BlogTag>();

                foreach (var tagId in createDto.SelectedTagIds)
                {
                    blog.BlogTags.Add(new BlogTag
                    {
                        TagId = tagId,
                        // BlogId'yi burada vermemize gerek yok, EF Core kaydederken atayacaktýr.
                    });
                }
            }






            await _blogRepository.CreateAsync(blog);


        }

        public async Task DeleteAsync(int id)
        {
           
            await _blogRepository.DeleteAsync(id);

        }

        public async Task<List<ResultBlogDto>> GetAllAsync()
        {

            var blogs = await _blogRepository.GetAllAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogs);

        }

        public async Task<List<ResultBlogDto>> GetAllAsync(Expression<Func<Blog, bool>> filter)
        {
            var blogs = await _blogRepository.GetAllAsync(filter);
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<List<ResultBlogDto>> GetAllBlogsOrderLastAsync()
        {
            var blogs = await _blogRepository.GetAllBlogsOrderLastAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<UpdateBlogDto> GetBlogByIdWithTagsAsync(int id)
        {
            
            var blog=await _blogRepository.GetBlogByIdWithTagsAsync(id);

            var updateBlog=_mapper.Map<UpdateBlogDto>(blog);

            updateBlog.SelectedTagIds=blog.BlogTags.Select(x=>x.TagId).ToList();

            return updateBlog;


        }

        public async Task<List<ResultBlogDto>> GetBlogsAdminNonCheckedAsync()
        {
           var blogsNonChecked=await _blogRepository.GetBlogsAdminNonCheckedAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogsNonChecked);


        }

        public async Task<List<ResultBlogDto>> GetBlogsAdminNonCheckedByUserIdAsync(int id)
        {
           var blogs=await _blogRepository.GetBlogsAdminNonCheckedByUserIdAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<List<ResultBlogDto>> GetBlogsWithAllSettingsLast5Async()
        {
           var blogs=await _blogRepository.GetBlogsWithAllSettingsLast5Async();
            return _mapper.Map<List<ResultBlogDto>>(blogs);


        }

        public async Task<List<ResultBlogDto>> GetBlogsWithCategoriesAsync()
        {
            var blogs=await _blogRepository.GetBlogsWithCategoriesAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogs);



        }

        public async Task<List<ResultBlogDto>> GetBlogsWithCategoriesNonToxicAsync()
        {

            var blogs = await _blogRepository.GetBlogsWithCategoriesNonToxicAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogs);


        }

        public async Task<List<ResultBlogDto>> GetBlogsWithCategoryIdAsync(int id)
        {
            var blogs=await _blogRepository.GetAllAsync(x=>x.CategoryId==id);
            return _mapper.Map<List<ResultBlogDto>>(blogs); 


        }

        public async Task<List<ResultBlogDto>> GetBlogsWithTags()
        {

            var blogs = await _blogRepository.GetBlogWithTagsAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<List<ResultBlogDto>> GetBlogsWithUserIdAdminNonCheckedAsync(int id)
        {
            var blogs = await _blogRepository.GetBlogsWithUserIdAdminNonCheckedAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);


        }

        public async Task<List<ResultBlogDto>> GetBlogsWithUserIdAsync(int id)
        {
            var blogs=await _blogRepository.GetBlogsWithUserIdAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);



        }

        public async Task<List<ResultBlogDto>> GetBlogsWithUserIdNonToxicAsync(int id)
        {
            var blogs = await _blogRepository.GetBlogsWithUserIdNonToxicAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);

        }

        public async Task<List<ResultBlogDto>> GetBlogsWithUserIdToxicAsync(int id)
        {
            var blogs = await _blogRepository.GetBlogsWithUserIdToxicAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<List<ResultBlogDto>> GetBlogWithTagsTheMostTag3Async()
        {
            var blogs = await _blogRepository.GetBlogWithTagsTheMostTag3Async();
            return _mapper.Map<List<ResultBlogDto>>(blogs);


        }

        public async Task<List<ResultBlogDto>> GetBlogxNonToxicAsync()
        {
            
            var blogsNonToxic=await _blogRepository.GetBlogxNonToxicAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogsNonToxic);


        }

        public async Task<List<ResultBlogDto>> GetBlogxNonToxicByUserIdAsync(int id)
        {
           var blogs=await _blogRepository.GetBlogxNonToxicByUserIdAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<List<ResultBlogDto>> GetBlogxToxicAsync()
        {

            var blogsToxic = await _blogRepository.GetBlogxToxicAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogsToxic);


        }

        public async Task<List<ResultBlogDto>> GetBlogxToxicByUserIdAsync(int id)
        {
           var blogs=await _blogRepository.GetBlogxToxicByUserIdAsync(id);
            return _mapper.Map<List<ResultBlogDto>>(blogs);
        }

        public async Task<UpdateBlogDto> GetByIdAsync(int id)
        {
            var blog = await _blogRepository.GetByIdAsync(id);
            return _mapper.Map<UpdateBlogDto>(blog);

        }

        public async Task<List<ResultBlogDto>> GetLast3BlogsAsync()
        {
            
            var blogs=await _blogRepository.GetLast3BlogsAsync();
            return _mapper.Map<List<ResultBlogDto>>(blogs);

             
        }

        public async Task UpdateAsync(UpdateBlogDto updateDto)
        {
           var blog=_mapper.Map<Blog>(updateDto);
           await _blogRepository.UpdateAsync(blog);


        }
    }
}
