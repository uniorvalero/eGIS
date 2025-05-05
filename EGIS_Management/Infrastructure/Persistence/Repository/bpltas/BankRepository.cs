using Domain.Entities.bpltas;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BankRepository : GenericRepository<Bank>, IBankRepository
    {
        public BankRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Bank> GetAllByDate(DateTime dt)
        {
            throw new NotImplementedException();
        }
    }
}
