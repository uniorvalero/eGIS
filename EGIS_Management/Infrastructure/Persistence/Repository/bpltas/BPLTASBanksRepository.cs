using Domain.Entities.bpltas;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BPLTASBanksRepository : GenericRepository<BPLTASBanks>, IBPLTASBanksRepository
    {
        public BPLTASBanksRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<BPLTASBanks> GetAllByDate(DateTime dt)
        {
            throw new NotImplementedException();
        }
    }
}
