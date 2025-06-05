using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface ICollectionSummaryDetailsRepository : IGenericRepository<CollectionSummaryDetails>
    {
        Task<IEnumerable<CollectionSummaryDetails>> GetAllDetails(string code, int month, int year);
    }
}
