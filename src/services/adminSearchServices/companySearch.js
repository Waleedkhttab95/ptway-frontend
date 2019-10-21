import baseRequest from '../../_core';
const companySearch = {
    companyById :(params)=> baseRequest.get(`/get/searchCompanyById/?id=${params.id}`).then(result => {
        return result;
    }).catch((e)=>{
        console.log('error',e.error);
    }),
    companyByMail: (params)=>{
       return baseRequest.get(`/get/searchCompanyByEmail/?email=${params.email}`).then(result => {
             return result;
         }).catch((e)=>{
             console.log('error',e.error);
         })
    },
    companyByName: (params)=>{
        return baseRequest.get(`/get/searchCompanyByName/?companyName=${params.name}`).then(result => {
              return result;
          }).catch((e)=>{
              console.log('error',e.error);
          })
     },
}

export default companySearch;