using Microsoft.AspNetCore.Mvc;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.EntityFrameworkCore;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillingTransactionController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public BillingTransactionController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // 1. Choose Receipt Type
        [HttpGet("ReceiptTypes")]
        public IActionResult GetReceiptTypes()
        {
            var receiptTypes = new[] { "General", "Burial", "Trust" };
            return Ok(receiptTypes);
        }

        // 2. Enter Payor Information
        [HttpPost("AddPayor")]
        public async Task<IActionResult> AddPayor([FromBody] BillingTransaction transaction)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _unitOfWork.BillingTransaction.CreateAsync(transaction);
            await _unitOfWork.CommitAsync();

            return CreatedAtAction(nameof(GetTransactionById), new { id = transaction.Id }, transaction);
        }

        // 3. Multiple Receipt Option - Add Payor and Codes
        [HttpPost("AddMultiplePayors")]
        public async Task<IActionResult> AddMultiplePayors([FromBody] List<BillingTransaction> transactions)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            foreach (var transaction in transactions)
            {
                await _unitOfWork.BillingTransaction.CreateAsync(transaction);
            }

            await _unitOfWork.CommitAsync();
            return Ok(transactions);
        }

        // 4. Enter Codes
        [HttpPost("AddPaymentCode/{transactionId}")]
        public async Task<IActionResult> AddPaymentCode(int transactionId, [FromBody] BillingTransactionDetail detail)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(transactionId);
            if (transaction == null)
                return NotFound();

            detail.BillingTransactionId = transactionId;
            await _unitOfWork.BillingTransactionDetail.CreateAsync(detail);
            await _unitOfWork.CommitAsync();

            return Ok(detail);
        }

        // 5. Clear Transactions
        [HttpDelete("ClearTransactions/{transactionId}")]
        public async Task<IActionResult> ClearTransactions(int transactionId)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(transactionId);
            if (transaction == null)
                return NotFound();

            var details = await _unitOfWork.BillingTransactionDetail.GetAllAsync();
            var transactionDetails = details.Where(d => d.BillingTransactionId == transactionId).ToList();

            foreach (var detail in transactionDetails)
            {
                await _unitOfWork.BillingTransactionDetail.DeleteAsync(detail);
            }

            await _unitOfWork.CommitAsync();
            return NoContent();
        }

        // 6. Print Transaction
        [HttpGet("PrintTransaction/{transactionId}")]
        public async Task<IActionResult> PrintTransaction(int transactionId)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(transactionId);
            if (transaction == null)
                return NotFound();

            // Simulate printing logic
            return Ok($"Transaction {transactionId} printed successfully.");
        }

        // 7. Finish Transaction
        [HttpPost("FinishTransaction/{transactionId}")]
        public async Task<IActionResult> FinishTransaction(int transactionId)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(transactionId);
            if (transaction == null)
                return NotFound();

            transaction.IsCompleted = true;
            _unitOfWork.BillingTransaction.Update(transaction);
            await _unitOfWork.CommitAsync();

            return Ok($"Transaction {transactionId} finalized successfully.");
        }

        // Helper: Get Transaction by ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTransactionById(int id)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(id);
            if (transaction == null)
                return NotFound();

            return Ok(transaction);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] BillingTransaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitOfWork.BillingTransaction.CreateAsync(transaction);
            await _unitOfWork.CommitAsync();
            return Ok(transaction);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var transactions = await _unitOfWork.BillingTransaction.GetAllAsync();
            return Ok(transactions);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] BillingTransaction transaction)
        {
            var existingTransaction = await _unitOfWork.BillingTransaction.GetByIdAsync(id);
            if (existingTransaction == null)
            {
                return NotFound();
            }

            existingTransaction.ReceiptType = transaction.ReceiptType;
            existingTransaction.PayorName = transaction.PayorName;
            existingTransaction.IsCash = transaction.IsCash;
            existingTransaction.CheckNumber = transaction.CheckNumber;
            existingTransaction.TransactionDate = transaction.TransactionDate;
            existingTransaction.IsCompleted = transaction.IsCompleted;

            _unitOfWork.BillingTransaction.Update(existingTransaction);
            await _unitOfWork.CommitAsync();
            return Ok(existingTransaction);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }

            await _unitOfWork.BillingTransaction.DeleteAsync(transaction);
            await _unitOfWork.CommitAsync();
            return Ok();
        }

        [HttpPost("AddDetail/{transactionId}")]
        public async Task<IActionResult> AddDetail(int transactionId, [FromBody] BillingTransactionDetail detail)
        {
            var transaction = await _unitOfWork.BillingTransaction.GetByIdAsync(transactionId);
            if (transaction == null)
            {
                return NotFound();
            }

            detail.BillingTransactionId = transactionId;
            transaction.Details.Add(detail);

            _unitOfWork.BillingTransaction.Update(transaction);
            await _unitOfWork.CommitAsync();
            return Ok(transaction);
        }
    }
}