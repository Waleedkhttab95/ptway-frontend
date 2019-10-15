import baseRequest from '../_core';

const companyStatistics ={
    companyBCountry: (params) =>{
        return baseRequest.get(`get/companyBcountry?country=${params.country_id}&city=${params.city_id}`)
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
         
        })
     },
     companyBMajor: (params) =>{
        return baseRequest.get(`/get/count/company?sector=${params.sector_id}&sp=${params.s_major}`)
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
         
        })
     },
     companyBCityMajor: (params) =>{
          return baseRequest.get(`/get/company/country/sector?country=${params.country_id}&city=${params.city_id}&sector=${params.major_id}&sp=${params.smajor_id}`)
          .then((result)=>{
               return result;
          }).catch((error)=>{
           console.log('error',error);
           
          })
       },
}

export default companyStatistics;
