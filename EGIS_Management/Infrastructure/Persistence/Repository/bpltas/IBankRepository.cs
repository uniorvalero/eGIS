using Domain.Entities.bpltas;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public interface IBankRepository : IGenericRepository<Bank>
    {
        IEnumerable<Bank> GetAllByDate(DateTime dt);
    }
}
