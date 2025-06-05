using Domain.Entities;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository.toims;
using Infrastructure.Persistence.Repository;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CollectionSummaryDetailsRepository : GenericRepository<CollectionSummaryDetails>, ICollectionSummaryDetailsRepository
    {
        public CollectionSummaryDetailsRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<IEnumerable<CollectionSummaryDetails>> GetAllDetails(string code)
        {
            return await _dbContext.Set<CollectionSummaryDetails>()
                .Where(x => x.Code == code)
                .ToListAsync();
        }
    }
}



