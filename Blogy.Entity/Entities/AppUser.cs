using Microsoft.AspNetCore.Identity;

namespace Blogy.Entity.Entities
{
    public class AppUser :IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? ImageUrl { get; set; }
        public string? Title { get; set; }

        public virtual IList<Blog> Blogs { get; set; }

        public virtual IList<Comment> Comments { get; set; }



        public string? City { get; set; }
        public string? Country { get; set; }
        public string? InstagramLink { get; set; }
        public string? LinkedlnLink { get; set; }
        public string? GithubLink { get; set; }
        







    }
}
