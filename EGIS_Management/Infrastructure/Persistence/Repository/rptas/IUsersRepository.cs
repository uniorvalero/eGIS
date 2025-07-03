using Domain.Entities;
using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public interface IUsersRepository : IGenericRepository<Users>
    {
        Task<IEnumerable<string>> GetUserNameByRoleList(string role);
        Task<IEnumerable<Users>> GetUserByRole(string role);

    }
}
