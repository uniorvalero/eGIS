using Domain.Entities;

namespace Infrastructure.Persistence.Repository.toims
{
    public class TellerRepository : GenericRepository<Teller>, ITellerRepository
    {
        public TellerRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
