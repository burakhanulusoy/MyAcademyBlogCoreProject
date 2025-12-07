using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.DataAccess.Repositories.SocialMediaRepositories;
using Blogy.Entity.Entities;

namespace Blogy.DataAccess.Repositories.SocialMediaRepository
{
    public class SocialMediaRepository : GenericRepository<SocialMedia>, ISocialMedaiRepository
    {
        public SocialMediaRepository(AppDbContext context) : base(context)
        {
        }
    }
}
