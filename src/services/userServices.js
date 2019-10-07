import baseRequest from '../_core';

const userServices = {
    login :(email,password)=> baseRequest.post('/login',{email,password}).then(result => {
        // baseRequest.addHeader(result.data.sessionToken);
        return result;
    })
}

export default userServices;