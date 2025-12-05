using AutoMapper;
using Blogy.Business.DTOs.TagDtos;
using Blogy.DataAccess.Repositories.TagRepositories;
using Blogy.Entity.Entities;
using System.Linq.Expressions;

namespace Blogy.Business.Services.TagServices
{
    public class TagService(ITagRepository _tagRepository,IMapper _mapper) : ITagService
    {
        public async Task CreateAsync(CreateTagDto createDto)
        {
           
            var tag=_mapper.Map<Tag>(createDto);
            await _tagRepository.CreateAsync(tag);


        }

        public async Task DeleteAsync(int id)
        {
           await _tagRepository.DeleteAsync(id);
        }

        public async Task<List<ResultTagDto>> GetAllAsync()
        {
            
            var tags=await _tagRepository.GetAllAsync();
            return _mapper.Map<List<ResultTagDto>>(tags);


        }

        public async Task<List<ResultTagDto>> GetAllAsync(Expression<Func<Tag, bool>> filter)
        {
            
            var tags=await _tagRepository.GetAllAsync(filter);
            return _mapper.Map<List<ResultTagDto>>(tags);


        }

        public async Task<UpdateTagDto> GetByIdAsync(int id)
        {
            
            var blog=await _tagRepository.GetByIdAsync(id);
            return _mapper.Map<UpdateTagDto>(blog);


        }

        public async Task UpdateAsync(UpdateTagDto updateDto)
        {
            var tag=_mapper.Map<Tag>(updateDto);
            await _tagRepository.UpdateAsync(tag);


        }
    }
}
