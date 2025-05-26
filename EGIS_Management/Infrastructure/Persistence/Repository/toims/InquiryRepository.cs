using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entities.toims;

namespace Infrastructure.Persistence.Repository.toims
{
    public class InquiryRepository : GenericRepository<Inquiry>, IInquiryRepository
    {
        public InquiryRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
