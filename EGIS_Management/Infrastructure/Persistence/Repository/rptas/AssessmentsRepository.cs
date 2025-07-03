using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using Infrastructure.Persistence.Repository.bpltas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public class AssessmentsRepository : GenericRepository<Assessments>, IAssessmentsRepository
    {
        public AssessmentsRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
