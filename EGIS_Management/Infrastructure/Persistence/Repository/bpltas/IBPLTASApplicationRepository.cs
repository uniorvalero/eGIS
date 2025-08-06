using Domain.Entities.bpltas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public interface IBPLTASApplicationRepository : IGenericRepository<BPLTASApplications>
    {
        Task<IEnumerable<int>> GetUserNameByRoleList(string status);
    }
}
