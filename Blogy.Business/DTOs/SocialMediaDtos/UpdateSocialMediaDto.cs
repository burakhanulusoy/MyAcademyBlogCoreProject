using Blogy.Business.DTOs.Common;

namespace Blogy.Business.DTOs.SocialMediaDtos
{
    public class UpdateSocialMediaDto:BaseDto
    {

        public string? Name { get; set; }
        public string? Url { get; set; }
        public string? Icon { get; set; }
        public string? ImageUrl { get; set; }



    }
}
