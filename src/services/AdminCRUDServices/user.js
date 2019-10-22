import baseRequest from '../../_core';

const userCRUD ={
    deleteUser: (params) =>{
        return baseRequest.delete('/delete/deleteUser',{user: {_id: params.id}})
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
        })
     },
}

export default userCRUD;
