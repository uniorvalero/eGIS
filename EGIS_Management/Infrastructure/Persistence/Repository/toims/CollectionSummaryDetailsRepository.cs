using Domain.Entities;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository.toims;
using Infrastructure.Persistence.Repository;
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
        public async Task<IEnumerable<CollectionSummaryDetails>> GetAllDetails(string code, int month, int year)
        {
            return await _dbContext.Set<CollectionSummaryDetails>()
                .Where(x => x.Code == code && x.SetDate.Month == month && x.SetDate.Year == year)
                .ToListAsync();
        }
    }
}



