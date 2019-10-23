import companyCRUD from '../../../services/AdminCRUDServices/company'

export const deleteCompany = (params)=>{
    return {
        type: 'DELETE_COMPANY',
        payload: companyCRUD.deleteCompany(params)
    }
}