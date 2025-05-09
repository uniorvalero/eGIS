using Domain.Entities;

namespace Infrastructure.Persistence.Repository
{
    public interface IMasterTableSubCodeRepository : IGenericRepository<MasterTableSubCode>
    {
        Task<IEnumerable<MasterTableSubCode>> GetDetailsByMasterCodeAsync(int code);
        Task<bool> IsSubcodeDuplicateAsync(int subcode);
    }
}

