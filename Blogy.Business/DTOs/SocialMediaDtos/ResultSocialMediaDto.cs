using Blogy.Business.DTOs.Common;

namespace Blogy.Business.DTOs.SocialMediaDtos
{
    public class ResultSocialMediaDto:BaseDto
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string Icon { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}
