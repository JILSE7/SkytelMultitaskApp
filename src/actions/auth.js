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

export const setNewCountMessages = (newMessages ) => ({type:types.setNewCountMessages, payload:newMessages});
 
export const startLogin = (data) => {    
    return async(dispatch) => {
       
        const login = await (await fetchFunction('Login/login', data, 'POST')).json();
        
        if(login.status){
            const count = await (await fetchFunction('Email/countMessages')).json();
            dispatch(loginUserStore({...login.user, ...count.result}));
            dispatch(getCustomers());
            return {
                ok: true,
                user: login.user
            };
        }
        
        //Mostrar alerta
        badLoginAlert();
        return false; 
        
    }
}


export const checkLogin = (token, setLoading) => {
    return async(dispatch) => {
        const login = await (await fetchFunction('Login/ValidateToken',{},'PUT',token)).json();
        if(login.status){
            const count = await (await fetchFunction('Email/countMessages')).json();

            setTimeout(() => {
                setLoading(false);
                dispatch(loginUserStore({...login.user, ...count.result}));
                dispatch(getCustomers());
            }, 600);
        }else{
            dispatch(logOut());
        }
        
    }
}


export const startLogOut = () => {
    return (dispatch) => {
        //Eliminando token
        localStorage.removeItem('token');
        //eliminando los datos de la sesion
        dispatch(logOut());
    }
}