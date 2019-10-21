import userSearch from '../../../services/adminSearchServices/userSearch';


export const searchById = (params)=>{
    return {
        type: 'USER_SEARCH_BY_ID',
        payload: userSearch.userById(params)
    }
}

export const searchByEmail = (params)=>{
    return {
        type: 'USER_SEARCH_BY_EMAIL',
        payload: userSearch.userByMail(params)
    }
}


export const searchByName = (params)=>{
    return {
        type: 'USER_SEARCH_BY_NAME',
        payload: userSearch.userByName(params)
    }
}

