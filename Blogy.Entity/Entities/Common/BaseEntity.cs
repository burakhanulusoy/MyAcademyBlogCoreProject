namespace Blogy.Entity.Entities.Common
{
    public abstract class BaseEntity
    {

        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }=DateTime.Now;
        public DateTime UpdatedDate { get; set; }=DateTime.Now;
    }
}
