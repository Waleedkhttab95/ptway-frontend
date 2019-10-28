import baseRequest from '../../_core';

const citiesContent ={
    deleteCity: (params) =>{
        return baseRequest.delete('/delete/deleteCity',{city: {_id: params.id}})
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
        })
     },
     updateCity: (params) =>{
        return baseRequest.put('/put/writeOnCity',
        {
            city:{_id: params.id}, 
            type: params.type,
            value: params.value
        })
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
        })
     },
     addCity: (params) =>{
        return baseRequest.post('/postcity',
        {
            cityName: params.cityName,
            countryName: params.countryName
        })
        .then((result)=>{
             return result;
        }).catch((error)=>{
         console.log('error',error);
        })
     },
}

export default citiesContent;
