import baseRequest from '../_core/index'

const statatisticsService ={
    age: (num) =>{
       return baseRequest.get(`/get/UsersDepenedsOnAge/:age?${num}`)
       .then((result)=>{
            return result;
       }).catch((error)=>{
        console.log('error',error);
        
       })
    }
}

export default statatisticsService;