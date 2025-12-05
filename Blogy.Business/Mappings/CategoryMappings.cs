using AutoMapper;
using Blogy.Business.DTOs.CategoryDtos;
using Blogy.Entity.Entities;

namespace Blogy.Business.Mappings
{
    public class CategoryMappings:Profile
    {
        public CategoryMappings()
        {
            CreateMap<Category,UpdateCategoryDto>().ReverseMap();
            CreateMap<Category,CreateCategoryDto>().ReverseMap();
            CreateMap<Category,ResultCategoryDto>().ForMember(des=>des.CategoryName,opt=>opt.MapFrom(src=>src.Name));



        }





    }
}
