using Blogy.Entity.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Blogy.DataAccess.Context
{
    public class AppDbContext: IdentityDbContext<AppUser,AppRole,int>
    { 

        public AppDbContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<BlogTag> BlogTags { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SocialMedia> SocialMedias { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Comment> Comments { get; set; }




    }
}
