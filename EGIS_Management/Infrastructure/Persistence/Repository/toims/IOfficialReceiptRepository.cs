using Domain.Entities.toims;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface IOfficialReceiptRepository : IGenericRepository<OfficialReceipt>
    {
        Task <IEnumerable<OfficialReceipt>>GetAllByDateAndForm(DateOnly startDate, DateOnly endDate, int form);
        Task <IEnumerable<OfficialReceipt>> GetAllByRangeDateAndForm(int subcode, int startRange, int endRange, string character);
    }
}
