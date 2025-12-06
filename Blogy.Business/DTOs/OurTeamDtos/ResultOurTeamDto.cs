using Blogy.Business.DTOs.Common;

namespace Blogy.Business.DTOs.OurTeamDtos
{
    public class ResultOurTeamDto:BaseDto
    {
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public string WhatDoYouDo { get; set; }

    }
}
