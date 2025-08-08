using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingModels_08072025 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Middlename",
                table: "UsersUser",
                newName: "MiddleName");

            migrationBuilder.RenameColumn(
                name: "Lastname",
                table: "UsersUser",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "Firstname",
                table: "UsersUser",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "BirthDaay",
                table: "UsersUser",
                newName: "BirthDay");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MiddleName",
                table: "UsersUser",
                newName: "Middlename");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "UsersUser",
                newName: "Lastname");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "UsersUser",
                newName: "Firstname");

            migrationBuilder.RenameColumn(
                name: "BirthDay",
                table: "UsersUser",
                newName: "BirthDaay");
        }
    }
}
