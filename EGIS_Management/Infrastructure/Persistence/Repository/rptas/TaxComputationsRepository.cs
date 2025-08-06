using Domain.Entities.rptas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public class TaxComputationsRepository : GenericRepository<TaxComputations>, ITaxComputationsRepository
    {
        public TaxComputationsRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<IEnumerable<int>> GetAllTaxIDByStatus(string status)
        {
            return await _dbContext.TaxComputations
                .Where(x => x.Status == status)
                .Select(x => x.TaxComputationId)
                .ToListAsync();
        }

        public async Task<TaxComputations?> GetTaxByPaymentId(int paymentId)
        {
            var payment = await _dbContext.Payments
                .FirstOrDefaultAsync(p => p.Id == paymentId);

            if (payment == null)
                return null;

            return await _dbContext.TaxComputations
                .FirstOrDefaultAsync(tc => tc.TaxComputationId == payment.TaxId);
        }
    }
}
