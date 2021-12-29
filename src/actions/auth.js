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
        
        if(login.status){
            const count = await (await fetchFunction('Email/countMessages')).json();
            dispatch(loginUserStore({...login.user, ...count.result}));
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
            const count = await (await fetchFunction('Email/countMessages')).json();
            dispatch(loginUserStore({...login.user, ...count.result}));
            dispatch(getCustomers());
        }else{
            dispatch(logOut());
        }
    }
}


export const startLogOut = (navigate) => {
    return (dispatch) => {
        //Eliminando token
        localStorage.removeItem('token');
        //eliminando los datos de la sesion
        dispatch(logOut());
    }
}