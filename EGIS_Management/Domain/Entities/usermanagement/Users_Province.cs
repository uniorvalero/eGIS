using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Province
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(200)]
        public string ProvinceName { get; set; }
        public int CountryId { get; set; }
        public ICollection<Users_City> Cities { get; set; }
    }
}
