import baseRequest from '../../_core';

const companyCRUD ={
    deleteCompany: (params) =>{
        return baseRequest.delete('/delete/deleteCompany',{company: {_id: params.id}})
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
        })
     },
     updateCompany: (params) =>{
        return baseRequest.put(`/put/writeOnCompany/?updateType=${params.type}&value=${params.value}`,{company: {_id: params.id}})
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
        })
     },
     confirmCompany: (params) =>{
          return baseRequest.put(`/confitm/company/?id=${params.id}`)
          .then((result)=>{
               return result;
          }).catch((error)=>{
           console.log('error',error);
          })
       },
}

export default companyCRUD;
