using Blogy.Business.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blogy.Business.DTOs.OurTeamDtos
{
    public class UpdateOurTeamDto:BaseDto
    {
        public string? Name { get; set; }
        public string? ImgUrl { get; set; }
        public string? WhatDoYouDo { get; set; }


    }
}
