using AutoMapper;
using Blogy.Business.DTOs.BlogTagDtos;
using Blogy.Entity.Entities;

namespace Blogy.Business.Mappings
{
    public class BlogTagMappings:Profile
    {

        public BlogTagMappings()
        {
            CreateMap<BlogTag, ResultBlogTagDto>().ReverseMap();


        }

    }
}
