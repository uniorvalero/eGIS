using Domain.Entities;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface IRevenueCodeChildRepository : IGenericRepository<RevenueCodeChild>
    {
        Task<IEnumerable<RevenueCodeChild>> GetDetailsByRevenueCodeAsync(string code);
    }
}
