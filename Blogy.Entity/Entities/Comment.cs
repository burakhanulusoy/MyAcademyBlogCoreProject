using Blogy.Entity.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
