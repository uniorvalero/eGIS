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
        public string TicketNumber { get; set; }
        public DateTime DateIssued { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
    }

}
