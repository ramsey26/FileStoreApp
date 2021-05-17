namespace API.Entities
{
    public class FileUpload
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}