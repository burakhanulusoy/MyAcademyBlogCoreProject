using AutoMapper;
using Blogy.Business.DTOs.OurTeamDtos;
using Blogy.Entity.Entities;

namespace Blogy.Business.Mappings
{
    public class OurTeamMappings:Profile
    {
        public OurTeamMappings()
        {
          CreateMap<OurTeam,ResultOurTeamDto>().ReverseMap();
          CreateMap<OurTeam,CreateOurTeamDto>().ReverseMap();
          CreateMap<OurTeam,UpdateOurTeamDto>().ReverseMap();
        
        
        }



    }
}

