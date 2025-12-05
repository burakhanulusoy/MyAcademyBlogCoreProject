using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Blogy.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mig_updatedBlog_added_status : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Status",
                table: "Blogs",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Blogs");
        }
    }
}
