using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DaisBookApi.Models
{
    public class MemberViewModel
    {
        public int MemberId { get; set; }

        public string MemberName { get; set; }

        public string JobTitle { get; set; }

        public DateTime EntryDate { get; set; }

        public string Description { get; set; }

        public double StarRating { get; set; }

        public string Image { get; set; }
    }
}
