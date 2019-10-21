import baseRequest from '../../_core';
const userSearch = {
    userById :(params)=> baseRequest.get(`/get/searchUserById/?id=${params.id}`).then(result => {
        return result;
    }).catch((e)=>{
        console.log('error',e.error);
    }),
    userByMail: (params)=>{
       return baseRequest.get(`/get/searchUserByEmail/?email=${params.email}`).then(result => {
             return result;
         }).catch((e)=>{
             console.log('error',e.error);
         })
    },
    userByName: (params)=>{
        return baseRequest.get(`/get/searchUserByName/?firstName=${params.name}`).then(result => {
              return result;
          }).catch((e)=>{
              console.log('error',e.error);
          })
     },
}

export default userSearch;