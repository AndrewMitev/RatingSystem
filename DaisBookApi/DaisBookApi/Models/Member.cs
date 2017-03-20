using System;

namespace DaisBookApi.Models
{
    public class Member
    {
        public int MemberId { get; set; }

        public string MemberName { get; set; }

        public string JobTitle { get; set; }

        public DateTime EntryDate { get; set; }

        public string Description { get; set; }

        public double StarRating { get; set; }

        public byte[] Image { get; set; }
    }
}
