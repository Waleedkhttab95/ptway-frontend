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
}

export default companyCRUD;
