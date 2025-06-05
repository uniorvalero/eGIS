using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class CollectionSummaryDetails
    {
        [Key] public int Id { get; set; }
        public string Code { get; set; }
        public DateOnly SetDate { get; set; }
        public double PerDayAmount { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
