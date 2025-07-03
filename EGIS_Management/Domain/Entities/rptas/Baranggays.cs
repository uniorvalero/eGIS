using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class Baranggays
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int ZoneNo { get; set; }
        public string City { get; set; } = string.Empty;
        public string Province { get; set; } = string.Empty;
    }
}
