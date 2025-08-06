using Domain.Entities.bpltas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BPLTASInspectionRepository : GenericRepository<BPLTASInspections>, IBPLTASInspectionRepository  
    {
        public BPLTASInspectionRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
