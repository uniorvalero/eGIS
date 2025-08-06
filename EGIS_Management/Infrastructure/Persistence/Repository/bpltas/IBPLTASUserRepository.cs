using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public interface IBPLTASUserRepository : IGenericRepository<BPLTASUsers>
    {
        Task<IEnumerable<string>> GetUserNameByRoleList(string role);
        Task<IEnumerable<BPLTASUsers>> GetUserByRole(string role);
    }
}
