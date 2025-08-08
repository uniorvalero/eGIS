using Domain.Entities.rptas;
using Domain.Entities.usermanagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public interface IUsersAddressRepository : IGenericRepository<Users_Address>
    {
        Task<Users_Address?> GetByUserId(int Id);
    }
}
