using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Blogy.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mig_update_category_added_creator : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Creator",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Creator",
                table: "Categories");
        }
    }
}
