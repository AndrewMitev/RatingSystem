using Microsoft.AspNetCore.Mvc;
using System.IO;
using DaisBookApi.Models;
using Newtonsoft.Json;
using System.Linq;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;
using System;

namespace DaisBookApi.Controllers
{
    [Route("api/[controller]")]
    public class MembersController : Controller
    {
        private DaisMembersContext _context;
        private JsonSerializerSettings _serializerSettings;

        public MembersController(DaisMembersContext context)
        {
            _context = context;
            this._serializerSettings = new JsonSerializerSettings();
            this._serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        [HttpGet]
        public string Get()
        {
            List<MemberViewModel> viewModel = new List<MemberViewModel>();
            var members = _context.Members.ToArray();

            foreach (var member in members)
            {
                viewModel.Add(new MemberViewModel { MemberId = member.MemberId, MemberName = member.MemberName, Description = member.Description, EntryDate = member.EntryDate, StarRating = member.StarRating, JobTitle = member.JobTitle, Image = "data:image/bmp;base64," + Convert.ToBase64String(member.Image) });
            }

            string serialized = JsonConvert.SerializeObject(viewModel, this._serializerSettings);
            return serialized;
        }

        [HttpGet("{id}")]
        public string Get([FromRoute] int id)
        {
            var member = _context.Members.FirstOrDefault(m => m.MemberId == id);
            MemberViewModel memberViewModel = new MemberViewModel
            {
                MemberName = member.MemberName,
                MemberId = member.MemberId,
                Description = member.Description,
                Image = "data:image/bmp;base64," + Convert.ToBase64String(member.Image),
                EntryDate = member.EntryDate,
                JobTitle = member.JobTitle,
                StarRating = member.StarRating
            };

            return JsonConvert.SerializeObject(memberViewModel, this._serializerSettings);
        }

        [HttpPost("vote")]
        public string Vote([FromBody]MemberViewModel value)
        {
            try
            {
                var updatedMember = _context.Members.FirstOrDefault(m => m.MemberId == value.MemberId);

                updatedMember.StarRating = value.StarRating;

                _context.SaveChanges();

                return "Success";
            }
            catch (IOException ex)
            {
                return ex.Message;
            }      
        }
    }
}
