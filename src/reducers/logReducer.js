import { initialStateUser } from "../helpers/initialState";
import { types } from "../types/types";


export const logReducer = (state = initialStateUser , action) => {
    
    switch (action.type) {
        case types.login:
            const {username,email,rol, token, estado, Asesores, skytelcom} = action.payload
            localStorage.setItem('token', token)
            return{
                ...state,
                login: true,
                user:{
                    username,
                    email,
                    rol,
                    estatus: estado
                },
                countMessage:{
                    Asesores,
                    skytelcom
                }

            }
           
        case types.logout:
            return {initialStateUser};

        case types.checkLog:
            console.log(action.payload);
            return{
                ...state
            }            
            
        default:
            return state;
    }
}