using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public interface IUsersProfileRepository : IGenericRepository<Users_Profile>
    {
    }
}