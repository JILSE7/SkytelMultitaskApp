import { tuple } from "antd/lib/_util/type";
import { fetchFunction, registerUserImage, uploadPhoto } from "../helpers/fetch";
import { toastMessage } from "../helpers/toast";
import { types } from "../types/types";

//ESTABLECER USUARIOS
const setUsers = (users) => ({
    type:types.setUsers,
    payload: users
});

const registerUser = () => ({
    type: types.registerUser
})


//TRAER USUARIOS
export const getUsers = () => {
    return async(dispatch) => {
        try {
            const users = await (await fetchFunction('Usuarios/users')).json();
            console.log(users);
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
        toastMessage(`Excelente, usuario ${user.Username} registrado, ya puede iniciar sesion`, true);
        //TRAYENDO A LOS NUEVOS USUARIOS
        dispatch(getUsers()); 


    } catch (error) {
        console.log(error);
    }
 }
}
