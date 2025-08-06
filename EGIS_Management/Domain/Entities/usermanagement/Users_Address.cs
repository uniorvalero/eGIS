using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Address
    {
        [Key]
        public int Id { get; set; }
        public string AddressLine1 { get; set; } = string.Empty;
        public string? BuildingName { get; set; } //Room/Floor/Unit/Building name
        public string? HouseNo { get; set; } // House/Block/Lot number
        public string? Subdivision { get; set; }
        public int? CountryId { get; set; }
        public int? ProvinceId { get; set; }
        public int? DistrictId { get; set; }
        public int? CityId { get; set; }
        public int? BarangayId { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
