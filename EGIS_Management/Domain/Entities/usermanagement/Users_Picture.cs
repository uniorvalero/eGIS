using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.usermanagement
{
    public class Users_Picture
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string ImageType { get; set; } = string.Empty;
        [NotMapped]
        public Blob Source { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

    }
}
