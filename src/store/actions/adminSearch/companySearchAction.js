import companySearch from '../../../services/adminSearchServices/companySearch';


export const searchById = (params)=>{
    return {
        type: 'COMPANY_SEARCH_BY_ID',
        payload: companySearch.companyById(params)
    }
}

export const searchByEmail = (params)=>{
    return {
        type: 'COMPANY_SEARCH_BY_EMAIL',
        payload: companySearch.companyByMail(params)
    }
}


export const searchByName = (params)=>{
    return {
        type: 'COMPANY_SEARCH_BY_NAME',
        payload: companySearch.companyByName(params)
    }
}

