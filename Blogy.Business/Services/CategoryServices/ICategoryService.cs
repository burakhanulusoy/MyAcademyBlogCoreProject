using Blogy.Business.DTOs.CategoryDtos;
using Blogy.Entity.Entities;
using System.Linq.Expressions;

namespace Blogy.Business.Services.CategoryServices
{
    public interface ICategoryService
    {

        Task<List<ResultCategoryDto>> GetAllCategoryAsync();
        Task<List<ResultCategoryDto>> GetAllCategoryAsync(Expression<Func<Category,bool>> filter);
        Task<UpdateCategoryDto> GetByIdCategoryAsync(int id);
        Task CreateCategoryAsync(CreateCategoryDto createCategoryDto);
        Task UpdateCategoryAsync(UpdateCategoryDto updateCategoryDto);
        Task DeleteCategoryAsync(int id);

        Task<List<ResultCategoryDto>> GetCategoriesWithBlogsAsync();




    }
}
