using Blogy.DataAccess.Context;
using Blogy.Entity.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Blogy.DataAccess.Repositories.GenericRepositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly AppDbContext _context;
        protected readonly DbSet<TEntity> _table;

        public GenericRepository(AppDbContext context)
        {
            _context = context;
            _table = _context.Set<TEntity>();
        }

        public async Task CreateAsync(TEntity entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();


        }

        public async Task DeleteAsync(int id)
        {

              var value=await _table.FindAsync(id);
              _context.Remove(value);
              await _context.SaveChangesAsync();

        }

        public async Task<List<TEntity>> GetAllAsync()
        {

          return await _table.AsNoTracking().ToListAsync();
        
        }

        public async Task<List<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> Filter)
        {
           
            return await _table.Where(Filter).AsNoTracking().ToListAsync();


        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
            var entity = await _table.FindAsync(id);

            if (entity != null)
            {
                // KRÝTÝK NOKTA: Veriyi bulduktan sonra "Detach" yaparak takibi býrakýyoruz.
                // Bu sayede daha sonra Update iþlemi yaparken "Zaten takip ediliyor" hatasý almazsýn.
                _context.Entry(entity).State = EntityState.Detached;
            }

            return entity;
        }

        public async Task UpdateAsync(TEntity entity)
        {
          
            _context.Update(entity);

            _context.Entry(entity).Property(x => x.CreatedDate).IsModified = false;

            await _context.SaveChangesAsync();


        }
    }
}
