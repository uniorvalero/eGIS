using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class CashTicket
    {
        [Key] public int Id { get; set; }
        public int ControlNumber { get; set; }
        public int Quantity { get; set; }
        public double Amount { get; set; }
        public string TellerName { get; set; }
        public int TellerCode { get; set; }
        public DateTime CreateAt { get; set; }
    }
}
