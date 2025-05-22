using Infrastructure.Persistence.Repository.bpltas;
using Infrastructure.Persistence.Repository.login;
using Infrastructure.Persistence.Repository.toims;

namespace Infrastructure.Persistence.Repository
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
        //Login Repository
        ILoginRepository Login { get; }

        //BPLTAS Repository
        IBankRepository Bank { get; }
        IBarangayRepository Barangay { get; }
        IBillingRepository Billing { get; }

        //TOIMS Setup Models
        IMasterTableCodeRepository MasterCode { get; }
        IMasterTableSubCodeRepository SubCode { get; }
        IRevenueCodeParentRepository RevenueCodeParent { get; }
        IRevenueCodeChildRepository RevenueCodeChild { get; }
        ITellerRepository Teller { get; }
        IEstimatedRevenueRepository EstimatedRevenue { get; }
        IManagingTemplateRepository ManagingTemplate { get; }
        ICollectionCodeRepository CollectionCode { get; }

        //Transaction Models
        IOfficialReceiptRepository OfficialReceipt { get; }
        IOfficialReceiptDetailRepository OfficialReceiptDetail { get; }
        IBillingTransactionRepository BillingTransaction { get; }
        IBillingTransactionDetailRepository BillingTransactionDetail { get; }
        IFormIssuanceRepository FormIssuance { get; }
        ICashTicketRepository CashTicket { get; }
        ITransferTaxConfirmationRepository TransferTaxConfirmation { get; }
        ICheckPaymentRepository CheckPayment { get; }
        IPostingRecordRepository PostingRecord { get; }
        ICancelledReceiptRepository CancelledReceipt { get; }
        IReceiptInquiryLogRepository ReceiptInquiryLog { get; }
        IBatchReceiptRepository BatchReceipt { get; }
        ICheckReceivedDayRepository CheckReceivedDay { get; }
    }
}
