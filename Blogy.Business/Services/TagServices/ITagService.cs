using Blogy.Business.DTOs.TagDtos;
using Blogy.Business.Services.GenericServices;
using Blogy.Entity.Entities;

namespace Blogy.Business.Services.TagServices
{
    public interface ITagService:IGenericService<Tag,ResultTagDto,UpdateTagDto,CreateTagDto>
    {
    }
}
