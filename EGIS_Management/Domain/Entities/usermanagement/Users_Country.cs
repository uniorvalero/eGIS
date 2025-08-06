using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Country
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(200)]
        public string CountryName { get; set; }
        public ICollection<Users_Province> Provinces { get; set; }
    }
}
