using Domain.Entities.toims;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface IOfficialReceiptRepository : IGenericRepository<OfficialReceipt>
    {
        Task<IEnumerable<OfficialReceipt>> GetAllAsync();
        Task<OfficialReceipt> GetByIdAsync(int id);
        Task CreateAsync(OfficialReceipt receipt);
    }
}
