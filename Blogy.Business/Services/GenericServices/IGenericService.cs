using System.Linq.Expressions;

namespace Blogy.Business.Services.GenericServices
{
    public interface IGenericService<TEntity,TResultDto,TUpdateDto,TCreateDto>
    {

        Task<List<TResultDto>> GetAllAsync();
        Task<List<TResultDto>> GetAllAsync(Expression<Func<TEntity,bool>> filter);
        Task<TUpdateDto> GetByIdAsync(int id);
        Task CreateAsync(TCreateDto createDto);
        Task UpdateAsync(TUpdateDto updateDto);
        Task DeleteAsync(int id);


    }
}
