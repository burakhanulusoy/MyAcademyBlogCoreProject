using AutoMapper;
using Blogy.Business.DTOs.TagDtos;
using Blogy.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blogy.Business.Mappings
{
    public class TagMapping:Profile
    {
        public TagMapping()
        {
            CreateMap<Tag,ResultTagDto>().ReverseMap();
            CreateMap<Tag,UpdateTagDto>().ReverseMap();
            CreateMap<Tag,CreateTagDto>().ReverseMap();
        }
    }
}
