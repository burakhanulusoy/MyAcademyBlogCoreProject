using Blogy.DataAccess.Context;
using Blogy.DataAccess.Repositories.GenericRepositories;
using Blogy.Entity.Entities;

namespace Blogy.DataAccess.Repositories.OurTeamRepositories
{
    public class OurTeamRepository : GenericRepository<OurTeam>, IOurTeamRepository
    {
        public OurTeamRepository(AppDbContext context) : base(context)
        {
        }




    }
}
