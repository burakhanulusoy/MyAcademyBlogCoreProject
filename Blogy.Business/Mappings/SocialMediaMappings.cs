using AutoMapper;
using Blogy.Business.DTOs.SocialMediaDtos;
using Blogy.Entity.Entities;

namespace Blogy.Business.Mappings
{
    public class SocialMediaMappings:Profile
    {
        public SocialMediaMappings()
        {
            CreateMap<SocialMedia,ResultSocialMediaDto>().ReverseMap();
            CreateMap<SocialMedia,CreateSocialMediaDto>().ReverseMap();
            CreateMap<SocialMedia,UpdateSocialMediaDto>().ReverseMap();
        }
    }
}
