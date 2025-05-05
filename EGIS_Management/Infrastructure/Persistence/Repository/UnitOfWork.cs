
using Infrastructure.Persistence.Repository.bpltas;
using Infrastructure.Persistence.Repository.login;
using Infrastructure.Persistence.Repository.toims;

namespace Infrastructure.Persistence.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        public EGISManagementDbContext _dbContext;

        public UnitOfWork(EGISManagementDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //Login Setup Models Repository
        public ILoginRepository Login => new LoginRepository(_dbContext);

        //BPLTAS Setup Models Repository
        public IBankRepository Bank => new BankRepository(_dbContext);
        public IBarangayRepository Barangay => new BarangayRepository(_dbContext);
        public IBillingRepository Billing => new BillingRepository(_dbContext);

        //TOIMS Setup Models Repository
        public IMasterTableCodeRepository MasterCode => new MasterTableCodeRepository(_dbContext);
        public IMasterTableSubCodeRepository SubCode => new MasterTableSubCodeRepository(_dbContext);
        public IRevenueCodeParentRepository RevenueCodeParent => new RevenueCodeParentRepository(_dbContext);
        public IRevenueCodeChildRepository RevenueCodeChild => new RevenueCodeChildRepository(_dbContext);
        public ITellerRepository Teller => new TellerRepository(_dbContext);
        public IEstimatedRevenueRepository EstimatedRevenue => new EstimatedRevenueRepository(_dbContext);
        public IManagingTemplateRepository ManagingTemplate => new ManagingTemplateRepository(_dbContext);
        public ICollectionCodeRepository CollectionCode => new CollectionCodeRepository(_dbContext);

        //TOIMS Transaction Models Repository
        public IOfficialReceiptRepository OfficialReceipt => new OfficialReceiptRepository(_dbContext);
        public IOfficialReceiptDetailRepository OfficialReceiptDetail => new OfficialReceiptDetailRepository(_dbContext);
        public IBillingTransactionRepository BillingTransaction => new BillingTransactionRepository(_dbContext);
        public IBillingTransactionDetailRepository BillingTransactionDetail => new BillingTransactionDetailRepository(_dbContext);
        public IFormIssuanceRepository FormIssuance => new FormIssuanceRepository(_dbContext);
        public ICashTicketRepository CashTicket => new CashTicketRepository(_dbContext);
        public ITransferTaxConfirmationRepository TransferTaxConfirmation => new TransferTaxConfirmationRepository(_dbContext);
        public ICheckPaymentRepository CheckPayment => new CheckPaymentRepository(_dbContext);
        public IPostingRecordRepository PostingRecord => new PostingRecordRepository(_dbContext);
        public ICancelledReceiptRepository CancelledReceipt => new CancelledReceiptRepository(_dbContext);
        public IReceiptInquiryLogRepository ReceiptInquiryLog => new ReceiptInquiryLogRepository(_dbContext);
        public IBatchReceiptRepository BatchReceipt => new BatchReceiptRepository(_dbContext);


        //Task bool CommitAsync()
        public async Task<bool> CommitAsync()
        {
            try
            {
                return await _dbContext.SaveChangesAsync() > 0;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
