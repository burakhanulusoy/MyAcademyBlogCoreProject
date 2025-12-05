using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;
using System.Linq.Expressions;

namespace Blogy.DataAccess.Repositories.CategoryRepositories
{
    public interface ICategoryRepository:IGenericRepository<Category>
    {

        Task<bool> AnyHaveCategoryAsync(Expression<Func<Category, bool>> filter);

        Task<List<Category>> GetCategoriesWithBlogsAsync();



    }
}
