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
     growth: () =>{
          return baseRequest.get('/get/growthRate')
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
         
        })
     },
     allCountries :()=>{
         return baseRequest.get('/getcountry').then((countries)=>{
              return countries.map((elm)=>{
                  return {
                      id: elm._id,
                      value: elm.countryName,
                      label: elm.countryName
                  }
              })
          });
     },
     allMajors: ()=>{
          return  baseRequest.get('/get/majors')
          .then((majors)=>{
              return majors.map((value)=>{
                  return {
                      id: value._id,
                      value: value.majorName,
                      label:  value.majorName,
                      key: value.key
                  }
              })
          });
     },
     getAllCompanyMajors: ()=>{
        return  baseRequest.get('/getsectors')
        .then((majors)=>{
            return majors.map((value)=>{
                return {
                    id: value._id,
                    value: value.sectorName,
                    label:  value.sectorName,
                    key: value.key
                }
            })
        });
   },
     sMajor:(majorId)=>{
          return  baseRequest.get(`/get/spMajors?id=${majorId}`)
          .then((specialMajor)=>{
              return specialMajor.map((elm)=>{
                  return {
                      id: elm._id,
                      value: elm.majorName,
                      label: elm.majorName,
                  };
              });
          });
     },
     getCompanySMajor:()=>{
        return  baseRequest.get('/getspec')
        .then((specialMajor)=>{
            return specialMajor.map((elm)=>{
                return {
                    id: elm._id,
                    value: elm.specialistName,
                    label: elm.specialistName,
                };
            });
        });
   },
     companiesInfo: ()=>{
          return baseRequest.get('/get/companiesInfo').then((companiesInfo)=> companiesInfo);
     },
     allCities: ()=>{
          return  baseRequest.get('/getcity')
          .then((cityData)=>{
          return cityData.map((elm)=>{
                  return {
                      id: elm._id,
                      value: elm.cityName,
                      label: elm.cityName
                  }
              });
          });
     }
}

export default statatisticsService;
