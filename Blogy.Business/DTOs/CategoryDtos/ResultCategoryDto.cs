using Blogy.Business.DTOs.BlogDtos;
using Blogy.Business.DTOs.Common;

namespace Blogy.Business.DTOs.CategoryDtos
{
    public class ResultCategoryDto:BaseDto
    {
        public string Creator { get; set; }

        public string CategoryImage { get; set; }
        public string CategoryName { get; set; }
        public IList<ResultBlogDto> Blogs { get; set; }


    }
}
