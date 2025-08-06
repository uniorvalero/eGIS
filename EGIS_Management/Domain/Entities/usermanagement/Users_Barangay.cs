using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Barangay
    {
        [Key]
        public int Id { get; set; }
        public string BarangayName { get; set; }
        public string ZipCode { get; set; }
        public int CityId { get; set; }
    }
}
