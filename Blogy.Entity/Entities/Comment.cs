using Blogy.Entity.Entities.Common;

namespace Blogy.Entity.Entities
{
    public class Comment:BaseEntity
    {
        public string Content { get; set; }

        public virtual Blog Blog { get; set; }
        public int BlogId { get; set; }

        public virtual AppUser User { get; set; }
        public int UserId { get; set; }

    }
}
