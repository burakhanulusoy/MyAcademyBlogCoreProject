using Blogy.Entity.Entities.Common;

namespace Blogy.Entity.Entities
{
    public class Category:BaseEntity
    {
        public string Name { get; set; }
        public string CategoryImage { get; set; }
        public string Creator { get; set; }
        public virtual IList<Blog> Blogs { get; set; }



    }
}
