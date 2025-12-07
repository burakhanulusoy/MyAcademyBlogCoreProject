using Blogy.Business.DTOs.SocialMediaDtos;
using Blogy.Business.Services.GenericServices;
using Blogy.Entity.Entities;

namespace Blogy.Business.Services.SocialMediaServices
{
    public interface ISocialMediaService:IGenericService<SocialMedia,ResultSocialMediaDto,UpdateSocialMediaDto,CreateSocialMediaDto>
    {
    }
}
