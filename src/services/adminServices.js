import baseRequest from '../_core';

const adminServices = {
    login :(email,password)=> baseRequest.post('/login',{email,password}).then(result => {
        // baseRequest.addHeader(result.data.sessionToken);
        console.log('result',result);
        
        return result;
    }).catch((e)=>{
        console.log('error',e.error);
        
    })
}

export default adminServices;