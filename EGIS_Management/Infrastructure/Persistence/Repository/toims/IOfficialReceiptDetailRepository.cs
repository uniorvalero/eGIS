using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface IOfficialReceiptDetailRepository : IGenericRepository<OfficialReceiptDetail>
    {
        Task CreateAsync(OfficialReceiptDetail detail);
    }
}
