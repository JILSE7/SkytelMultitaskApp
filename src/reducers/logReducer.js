import { initialStateUser } from "../helpers/initialState";
import { types } from "../types/types";


export const logReducer = (state = initialStateUser , action) => {
    
    switch (action.type) {
        case types.login:
            const {username,email,rol, token, estado, imagen,Asesores, skytelcom} = action.payload
            localStorage.setItem('token', token)
            return{
                ...state,
                login: true,
                user:{
                    username,
                    email,
                    rol,
                    estatus: estado,
                    imagen
                },
                countMessage:{
                    Asesores,
                    skytelcom
                }

            };
           
        case types.logout:
            return {initialStateUser};

        case types.setNewCountMessages: 
            return{
                ...state,
                countMessage:{
                   ...action.payload
                }
            };

        case types.checkLog:
            console.log(action.payload);
            return{
                ...state
            };            
            
        default:
            return state;
    }
}