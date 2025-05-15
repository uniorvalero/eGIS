using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class FormIssuanceRepository : GenericRepository<FormIssuance>, IFormIssuanceRepository
    {
        public FormIssuanceRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<bool> IsCodeDuplicateAsync(string bookNumber)
        {
            return await _dbContext.FormIssuance.AnyAsync(x => x.BookNumber == bookNumber);
        }
    }
}
