using System.ComponentModel.DataAnnotations;

namespace CoreApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required (ErrorMessage = "Username is required")]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8, MinimumLength = 4, 
        ErrorMessage = "You must specify password between {2} and {1} characters")]
        public string Password { get; set; }
    }
}