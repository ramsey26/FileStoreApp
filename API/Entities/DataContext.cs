using Microsoft.EntityFrameworkCore;

namespace API.Entities
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> AppUsers {get;set;}
        public DbSet<FileUpload> FileUploads {get;set;}
    }
}