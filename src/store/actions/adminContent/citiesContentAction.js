import citiesContent from '../../../services/AdminContentServices/city';

export const updateCity =(params)=>{
    return {
        type: 'UPDATE_CITY',
        payload: citiesContent.updateCity(params)
    }
}