using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities.bpltas
{
    public class Billing
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("BusinessPermitId")]
        public int BusinessPermitId { get; set; }
        public double NetDue { get; set; }
        public string Description { get; set; } = string.Empty;
        public double TaxDue { get; set; }
        public double Discount { get; set; }
        public double Penalty { get; set; }
        public double TotalDue { get; set; }
        public string Period { get; set; } = string.Empty;
        public int Year { get; set; }

    }
}
