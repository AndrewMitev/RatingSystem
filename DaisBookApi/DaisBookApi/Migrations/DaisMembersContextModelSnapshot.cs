using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DaisBookApi.Models;

namespace DaisBookApi.Migrations
{
    [DbContext(typeof(DaisMembersContext))]
    partial class DaisMembersContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DaisBookApi.Models.Member", b =>
                {
                    b.Property<int>("MemberId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<DateTime>("EntryDate");

                    b.Property<byte[]>("Image");

                    b.Property<string>("JobTitle");

                    b.Property<string>("MemberName");

                    b.Property<double>("StarRating");

                    b.HasKey("MemberId");

                    b.ToTable("Members");
                });
        }
    }
}
