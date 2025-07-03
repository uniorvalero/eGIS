using Domain.Entities.rptas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public class PropertiesRepository : GenericRepository<Properties>, IPropertiesRepository
    {
        public PropertiesRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<IEnumerable<int>> GetTaxDeclarationList()
        {
            return await _dbContext.Properties
                .Select(x => x.TaxDeclarationNo)
                .ToListAsync();
        }
    }
}
