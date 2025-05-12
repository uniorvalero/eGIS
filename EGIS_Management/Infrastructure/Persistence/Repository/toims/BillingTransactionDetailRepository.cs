using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class BillingTransactionDetailRepository : GenericRepository<BillingTransactionDetail>, IBillingTransactionDetailRepository
    {
        public BillingTransactionDetailRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task CreateAsync(BillingTransactionDetail detail)
        {
            await _dbContext.BillingTransactionDetail.AddAsync(detail);
        }

        public async Task<IEnumerable<BillingTransactionDetail>> GetAllAsync()
        {
            return await _dbContext.BillingTransactionDetail.ToListAsync();
        }

        public async Task<BillingTransactionDetail> GetByIdAsync(int id)
        {
            return await _dbContext.BillingTransactionDetail.FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task DeleteAsync(BillingTransactionDetail detail)
        {
            _dbContext.BillingTransactionDetail.Remove(detail);
            await Task.CompletedTask;
        }
    }
}
