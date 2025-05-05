﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class Printer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NetworkAddress { get; set; } // Optional
        public bool IsDefault { get; set; }
    }

}
