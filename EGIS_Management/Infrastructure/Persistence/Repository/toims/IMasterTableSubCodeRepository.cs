using Domain.Entities;
using Domain.Entities.toims;

namespace Infrastructure.Persistence.Repository
{
    public interface IMasterTableSubCodeRepository : IGenericRepository<MasterTableSubCode>
    {
        Task<IEnumerable<MasterTableSubCode>> GetDetailsByMasterCode(int code);
    }
}

