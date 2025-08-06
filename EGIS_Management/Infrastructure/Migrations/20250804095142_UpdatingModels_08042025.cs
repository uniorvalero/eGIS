using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingModels_08042025 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BillingTransactionDetail");

            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "BillingTransaction",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "SubCode",
                table: "BillingTransaction",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TransactionCode",
                table: "BillingTransaction",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "BillingTransaction");

            migrationBuilder.DropColumn(
                name: "SubCode",
                table: "BillingTransaction");

            migrationBuilder.DropColumn(
                name: "TransactionCode",
                table: "BillingTransaction");

            migrationBuilder.CreateTable(
                name: "BillingTransactionDetail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BillingTransactionId = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SubCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TransactionCode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillingTransactionDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BillingTransactionDetail_BillingTransaction_BillingTransactionId",
                        column: x => x.BillingTransactionId,
                        principalTable: "BillingTransaction",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BillingTransactionDetail_BillingTransactionId",
                table: "BillingTransactionDetail",
                column: "BillingTransactionId");
        }
    }
}
