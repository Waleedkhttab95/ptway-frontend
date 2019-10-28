import citiesContent from '../../../services/AdminContentServices/city';

export const updateCity =(params)=>{
    return {
        type: 'UPDATE_CITY',
        payload: citiesContent.updateCity(params)
    }
}

export const deteteCity =(params)=>{
    return {
        type: 'DELETE_CITY',
        payload: citiesContent.deleteCity(params)
    }
}

export const addCity =(params)=>{
    return {
        type: 'ADD_CITY',
        payload: citiesContent.addCity(params)
    }
}