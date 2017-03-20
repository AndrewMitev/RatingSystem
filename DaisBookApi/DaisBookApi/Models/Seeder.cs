using System;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace DaisBookApi.Models
{
    public class Seeder
    {
        private DaisMembersContext _context;

        public Seeder(DaisMembersContext context)
        {
            _context = context;
        }

        public async Task EnsureSeedData()
        {
            if (!_context.Members.Any())
            {


                _context.Members.AddRange(new Member[] {
                    new Member { MemberName = "Rodotyea Iordanova", EntryDate = new DateTime(2016, 6, 9, 12, 0, 0), Description = "Blond woman, very smart and intelligent. Tries to play foosball (djagi) but fails.", StarRating = 3.2, JobTitle="Software Developer", Image = File.ReadAllBytes("wwwroot/Images/tea.jpg") },
                    new Member { MemberName = "Emil Aleksandrov", EntryDate = new DateTime(2016, 5, 9, 12, 0, 0), Description = "Macho from the sea, searching for kittens. Making money all day long", StarRating = 2.2, JobTitle="Software Developer", Image = File.ReadAllBytes("wwwroot/Images/emo.jpg") },
                    new Member { MemberName = "Dimitar Yanis", EntryDate = new DateTime(2016, 6, 9, 12, 0, 0), Description = "Passionate dancer, if you know what i mean .. :D. Has tinder account.", StarRating = 4.2, JobTitle="Homeless bum on the street.", Image = File.ReadAllBytes("wwwroot/Images/dimi.jpg") },
                    new Member { MemberName = "Konstantina Krusteva", EntryDate = new DateTime(2016, 6, 9, 12, 0, 0), Description = "Favourite phrase: 'Предател!!!'. Has fragile bone structure ;d.", StarRating = 4.4, JobTitle="Software Developer", Image = File.ReadAllBytes("wwwroot/Images/titi.jpg") },
                    new Member { MemberName = "Deyan Svetoslavov", EntryDate = new DateTime(2016, 6, 9, 12, 0, 0), Description = "Terrible coup player. Can kick balls and program stuff :D", StarRating = 3.6, JobTitle="Software Developer", Image = File.ReadAllBytes("wwwroot/Images/dejan.jpg") },
                    new Member { MemberName = "Alex Stefanov", EntryDate = new DateTime(2016, 6, 9, 12, 0, 0), Description = "Passion and commitment. Has huge potential as a dad.", StarRating = 3.6, JobTitle="Software Developer", Image = File.ReadAllBytes("wwwroot/Images/alex.jpg") },
                });
            }

            await _context.SaveChangesAsync();
        }
    }
}
