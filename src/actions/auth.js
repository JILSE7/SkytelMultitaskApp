import { badLoginAlert } from "../helpers/alert";
import { fetchFunction } from "../helpers/fetch";
import { types } from "../types/types";
import { getCustomers } from "./customers";




const loginUserStore = (user) => {
    return {
        type: types.login,
        payload:user
    }
};


const logOut = () => ({type: types.logout});
 
export const startLogin = (data) => {    
    return async(dispatch) => {
        const login = await (await fetchFunction('Login/login', data, 'POST')).json();
        console.log(login);
        if(login.status){
            dispatch(loginUserStore(login.user));
            dispatch(getCustomers());
            return true;
        }
        
        //Mostrar alerta
        badLoginAlert();
        return false; 
        
    }
}


export const checkLogin = (token) => {
    return async(dispatch) => {
        const login = await (await fetchFunction('Login/ValidateToken',{},'PUT',token)).json();
        
        if(login.status){
            dispatch(loginUserStore(login.user));
            dispatch(getCustomers());
        }else{
            dispatch(logOut);
        }
    }
}