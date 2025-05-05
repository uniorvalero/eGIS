using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class EstimatedRevenue
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double Amount { get; set; }
        public int SetupYear { get; set; }

    }
}
