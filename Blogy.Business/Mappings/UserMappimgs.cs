using AutoMapper;
using Blogy.Business.DTOs.UserDtos;
using Blogy.Entity.Entities;

namespace Blogy.Business.Mappings
{
    public class UserMappimgs:Profile
    {

        public UserMappimgs()
        {
            CreateMap<AppUser, ResultUserDto>().ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"));

            CreateMap<AppUser,EditProfileDto>().ReverseMap();

        }

    }
}
