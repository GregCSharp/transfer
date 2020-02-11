using System;
using System.Linq;
using AutoMapper;
using CoreApp.API.Dtos;
using CoreApp.API.Models;

namespace CoreApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(destination => destination.PhotoUrl, 
                    options => options.MapFrom(source => 
                        source.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(destination => destination.Age,
                    options => options.MapFrom( source => 
                        source.DateOfBirth.CalculateAge()));


            CreateMap<User, UserForDetailedDto>()
                .ForMember(destination => destination.PhotoUrl, 
                    options => options.MapFrom(source => 
                        source.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(destination => destination.Age,
                    options => options.MapFrom( source => 
                        source.DateOfBirth.CalculateAge()));


            CreateMap<Photo, PhotoForDetailtedDto>();

            CreateMap<UserForUpdateDto, User>();

            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
        }
    }
}