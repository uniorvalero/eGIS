using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingModels_07302025 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "UsersOtpToken",
                newName: "LoginId");

            migrationBuilder.AddColumn<int>(
                name: "OTPId",
                table: "UsersProfile",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OTPId",
                table: "UsersProfile");

            migrationBuilder.RenameColumn(
                name: "LoginId",
                table: "UsersOtpToken",
                newName: "UserId");
        }
    }
}
