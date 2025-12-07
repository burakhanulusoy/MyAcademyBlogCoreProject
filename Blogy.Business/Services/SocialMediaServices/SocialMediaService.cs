using AutoMapper;
using Blogy.Business.DTOs.SocialMediaDtos;
using Blogy.DataAccess.Repositories.SocialMediaRepositories;
using Blogy.Entity.Entities;
using FluentValidation;
using System.Linq.Expressions;

namespace Blogy.Business.Services.SocialMediaServices
{
    public class SocialMediaService(ISocialMedaiRepository _socialMedaiRepository
                                    ,IMapper _mapper
                                    ,IValidator<SocialMedia> _validator) : ISocialMediaService
    {
        public async Task CreateAsync(CreateSocialMediaDto createDto)
        {
            var socialMedia=_mapper.Map<SocialMedia>(createDto);

            var result = await _validator.ValidateAsync(socialMedia);
            if(!result.IsValid)
            {
                throw new ValidationException(result.Errors);
            }
            await _socialMedaiRepository.CreateAsync(socialMedia);



        }

        public async Task DeleteAsync(int id)
        {
            await _socialMedaiRepository.DeleteAsync(id);
        }

        public async Task<List<ResultSocialMediaDto>> GetAllAsync()
        {
            var socialMedias=await _socialMedaiRepository.GetAllAsync();
            return _mapper.Map<List<ResultSocialMediaDto>>(socialMedias);


        }

        public async Task<List<ResultSocialMediaDto>> GetAllAsync(Expression<Func<SocialMedia, bool>> filter)
        {
            var socialMedias=await _socialMedaiRepository.GetAllAsync(filter);
            return _mapper.Map<List<ResultSocialMediaDto>>(socialMedias);
        }

        public async Task<UpdateSocialMediaDto> GetByIdAsync(int id)
        {
           
            var socialMedia=await _socialMedaiRepository.GetByIdAsync(id);
            return _mapper.Map<UpdateSocialMediaDto>(socialMedia);

        }

        public async Task UpdateAsync(UpdateSocialMediaDto updateDto)
        {
          
            var socialMedia=_mapper.Map<SocialMedia>(updateDto);
            var result =await _validator.ValidateAsync(socialMedia);
            if(!result.IsValid)
            {
                throw new ValidationException(result.Errors);

            }

            await _socialMedaiRepository.UpdateAsync(socialMedia);

        }
    }
}
