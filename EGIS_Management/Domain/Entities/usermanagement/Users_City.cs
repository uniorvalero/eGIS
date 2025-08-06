using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_City
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(200)]
        public string CityName { get; set; }
        public int ProvinceId { get; set; }
        public ICollection<Users_Barangay> Barangays { get; set; }
    }
}
