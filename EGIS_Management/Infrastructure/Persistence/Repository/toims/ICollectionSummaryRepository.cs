﻿using Domain.Entities;
using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface ICollectionSummaryRepository : IGenericRepository<CollectionSummary>
    {
        Task<IEnumerable<CollectionSummary>> GetAllByMonthAndYear(int month, int year);
    }
}
