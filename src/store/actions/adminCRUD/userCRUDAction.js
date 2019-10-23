import userCRUD from '../../../services/AdminCRUDServices/user'

export const deleteUser = (params)=>{
    return {
        type: 'DELETE_USER',
        payload: userCRUD.deleteUser(params)
    }
}

export const updateUser = (params)=>{
    return {
        type: 'UPDATE_USER',
        payload: userCRUD.updateUser(params)
    }
}