using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Blogy.DataAccess.Repositories.CategoryRepositories
{
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<bool> AnyHaveCategoryAsync(Expression<Func<Category, bool>> filter)
        {
            return await _table.AnyAsync(filter);//varsa true yoksa false döner ef core methodu
        }

      

        public async Task<List<Category>> GetCategoriesWithBlogsAsync()
        {
         
           return  await _table.AsNoTracking().Include(x=>x.Blogs).ToListAsync();

        }
    }
}
