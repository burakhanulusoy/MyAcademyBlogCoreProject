using Blogy.Business.DTOs.BlogDtos;
using Blogy.Business.DTOs.Common;
using Blogy.Business.DTOs.TagDtos;

namespace Blogy.Business.DTOs.BlogTagDtos
{
    public class ResultBlogTagDto:BaseDto
    {

        public  ResultBlogDto Blog { get; set; }
        public int BlogId { get; set; }

        public  ResultTagDto Tag { get; set; }
        public int TagId { get; set; }



    }
}
