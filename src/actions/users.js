import { saveAction } from "../helpers/alert";
import { fetchFunction, uploadPhoto } from "../helpers/fetch";
import { toastMessage } from "../helpers/toast";
import { types } from "../types/types";

//ESTABLECER USUARIOS
const setUsers = (users) => ({
    type:types.setUsers,
    payload: users
});
//NOTIFICAR A LA STORE DEL REGISTRO
const registerUser = () => ({type: types.registerUser});

//ACTIVAR USUARIO EN LA STORE
export const activeUserStore = (user) => ({
    type: types.activeUser,
    payload: user
});

//QUITAR AL USUARIO ACTIVO
export const inactiveUserStore = () => ({type: types.inactiveUser});




//TRAER USUARIOS
export const getUsers = () => {
    return async(dispatch) => {
        try {
            const users = await (await fetchFunction('Usuarios/users')).json();
            dispatch(setUsers(users.data));
        } catch (error) {
            console.log(error);
        }
    }
};

//REGISTRAR USUARIO
export const startRegisterUser = (user,file) => {
 return async(dispatch) => {
    try {

        
        if(file){
            try {
                let response = await uploadPhoto(file);
                (response)? user.image = response : user.image = "https://res.cloudinary.com/dl7ztndki/image/upload/v1641337465/skytel/anonimos_rmzejh.png";
            } catch (error) {   
                console.log(error);
            }
        }else{
            user.image = "https://res.cloudinary.com/dl7ztndki/image/upload/v1641337465/skytel/anonimos_rmzejh.png";
        }

        
        
        const response = await (await fetchFunction("Login/register",user, 'POST')).json();
        //MENSAJE CON ERRORES
        if(!response.status)toastMessage(JSON.stringify(response.error).slice(0,-1).slice(1,-1));
        
        dispatch(registerUser());
        toastMessage(`🤠 Excelente, usuario ${user.Username} registrado, ya puede iniciar sesion`, true);
        //TRAYENDO A LOS NUEVOS USUARIOS
        dispatch(getUsers()); 


    } catch (error) {
        console.log(error);
    }
 }
};

//CAMBIAR DATOS
export const changeDataUser = (data, file) => {
    console.log(data);
    
    return async(dispatch) => {
        try {
            if(file){
                try {
                    let response = await uploadPhoto(file);
                    if(response)data.Imagen = response;
                } catch (error) {   
                    console.log(error);
                }
            }
            
        const response = await (await fetchFunction("Usuarios/updateData",data, 'PUT')).json();
        
            if(response.ok){
                dispatch({type: types.updateUser})
                saveAction("Informacion actualizada");
                toastMessage(`🤠 Se ha cambiado la informacion de${data.Username}`, true);
                dispatch(getUsers());
            }
        } catch (error) {
            console.log(error);
        }
    }
}

//CAMBIAR CONTRASEÑA
export const changePasswordUser = (data) => {
    return async(dispatch) => {
        console.log(data);
        try {
        const response = await (await fetchFunction("Usuarios/updatePassword",data, 'PUT')).json();
        if(response.ok){
            dispatch({type: types.updateUserPassword});
            saveAction("Contraseña actualizada");
            toastMessage(`🤠 El usuario ${data.Username} puede iniciar sesion con su nueva contraseña`, true);
        }
            
        } catch (error) {
            console.log(error);
        }
    }
}