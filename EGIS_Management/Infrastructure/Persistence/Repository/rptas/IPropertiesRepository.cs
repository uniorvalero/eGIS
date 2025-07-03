using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public interface IPropertiesRepository : IGenericRepository<Properties>
    {
        Task<IEnumerable<int>> GetTaxDeclarationList();
    }
}
