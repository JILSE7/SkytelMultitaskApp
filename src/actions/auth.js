import Swal from "sweetalert2";
import { badLoginAlert } from "../helpers/alert";
import { fetchFunction } from "../helpers/fetch";
import { useNavigate } from "react-router";
import { types } from "../types/types";



const loginUserStore = (user) => {
    return {
        type: types.login,
        payload:user
    }

    
}

export const startLogin = (data) => {

    
    return async(dispatch) => {
        const login = await (await fetchFunction('Login/login', data, 'POST')).json();
        
        if(login.status){
            dispatch(loginUserStore(login.data));
            return true;
        }
        
        //Mostrar alerta
        badLoginAlert();
        return false; 
        
    }
}