using AutoMapper;
using Blogy.Business.DTOs.OurTeamDtos;
using Blogy.DataAccess.Repositories.OurTeamRepositories;
using Blogy.Entity.Entities;
using FluentValidation;
using System.Linq.Expressions;

namespace Blogy.Business.Services.OurTeamServices
{
    public class OurTeamService(IOurTeamRepository _ourTeamRepository,
                                 IMapper _mapper,
                                 IValidator<OurTeam> _validator) : IOurTeamService
    {
        public async Task CreateAsync(CreateOurTeamDto createDto)
        {
            var team=_mapper.Map<OurTeam>(createDto);
            var result=await _validator.ValidateAsync(team);
             if(!result.IsValid)
            {
                throw new ValidationException(result.Errors);

            }

             await _ourTeamRepository.CreateAsync(team);



        }

        public async Task DeleteAsync(int id)
        {
            await _ourTeamRepository.DeleteAsync(id);
        }

        public async Task<List<ResultOurTeamDto>> GetAllAsync()
        {
            var teams=await _ourTeamRepository.GetAllAsync();
            return _mapper.Map<List<ResultOurTeamDto>>(teams);



        }

        public async Task<List<ResultOurTeamDto>> GetAllAsync(Expression<Func<OurTeam, bool>> filter)
        {
            var teams=await _ourTeamRepository.GetAllAsync(filter);
            return _mapper.Map<List<ResultOurTeamDto>>(teams);
        }

        public async Task<UpdateOurTeamDto> GetByIdAsync(int id)
        {
            var teamMember=await _ourTeamRepository.GetByIdAsync(id);
            return _mapper.Map<UpdateOurTeamDto>(teamMember);


        }

        public async Task UpdateAsync(UpdateOurTeamDto updateDto)
        {
            var member=_mapper.Map<OurTeam>(updateDto);
            var result=await _validator.ValidateAsync(member);

            if(!result.IsValid)
            {
                throw new ValidationException(result.Errors);
            }
            await _ourTeamRepository.UpdateAsync(member);



        }
    }
}
