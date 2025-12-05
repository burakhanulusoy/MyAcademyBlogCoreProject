using Blogy.Business.DTOs.Common;
using Blogy.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blogy.Business.DTOs.UserDtos
{
    public class ResultUserDto:BaseDto
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }

        public IList<string> Roles { get; set; }



        public string? City { get; set; }
        public string? Country { get; set; }
        public string? InstagramLink { get; set; }
        public string? LinkedlnLink { get; set; }
        public string? GithubLink { get; set; }



    }
}
