import userServices from '../../services/userServices';
import Password from 'antd/lib/input/Password';
import adminServices from '../../services/adminServices';

export const userLogin = (email,password)=>{
    return {
        type: 'LOGIN_USER_SUCCESS',
        payload: userServices.login(email,password)
        
    }
}

export const adminLogin = (email,password)=>{
    console.log('params',email,password);
    
    return {
        type: 'LOGIN_ADMIN',
        payload: adminServices.login(email,password)
        
    }
}