using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Blogy.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mig_updated_user_added_contryCityInstGitLinkLinks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "toxicityValue",
                table: "Blogs",
                newName: "ToxicityValue");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GithubLink",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InstagramLink",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LinkedlnLink",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "GithubLink",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "InstagramLink",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LinkedlnLink",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "ToxicityValue",
                table: "Blogs",
                newName: "toxicityValue");
        }
    }
}
