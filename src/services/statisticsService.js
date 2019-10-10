import baseRequest from '../_core/index'

const statatisticsService ={
    age: (num) =>{
       return baseRequest.get(`/get/UsersDepenedsOnAge/:age?${num}`)
       .then((result)=>{
            return result;
       }).catch((error)=>{
        console.log('error',error);
        
       })
    },
    city: (params) =>{
        return baseRequest.get(`get/UsersDepenedsOnArea?city=${params.city_id}&country=${params.country_id}`)
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
         
        })
     },
     major: (params) =>{
            return baseRequest.get(`/get/UsersDepenedsOnMajor/?major=${params.major}&spMajor=${params.spMajor}`)
          .then((result)=>{
               return result;
          }).catch((error)=>{
           console.log('error',error);
           
          })
       },
}

export default statatisticsService;