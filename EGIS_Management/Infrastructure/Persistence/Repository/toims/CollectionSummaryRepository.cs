using Domain.Entities;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CollectionSummaryRepository : GenericRepository<CollectionSummary>, ICollectionSummaryRepository
    {
        public CollectionSummaryRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<CollectionSummary>> GetAllByMonthAndYear(int month, int year)
        {
            return await _dbContext.Set<CollectionSummary>()
                .Where(x => x.Month == month && x.Year == year)
                .ToListAsync();
        }
    }
}
