using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CheckReceivedDayRepository : GenericRepository<CheckReceivedDay>, ICheckReceivedDayRepository
    {
        public CheckReceivedDayRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
