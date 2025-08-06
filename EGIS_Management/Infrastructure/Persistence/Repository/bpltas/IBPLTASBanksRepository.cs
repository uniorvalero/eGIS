using Domain.Entities.bpltas;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public interface IBPLTASBanksRepository : IGenericRepository<BPLTASBanks>
    {
        IEnumerable<BPLTASBanks> GetAllByDate(DateTime dt);
    }
}
