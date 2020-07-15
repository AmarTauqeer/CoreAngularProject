using System.ComponentModel.DataAnnotations;

namespace CoreAngularAPI.Model
{
    public class Employee
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }

    }
}
