import { initialStateUser } from "../helpers/initialState";
import { types } from "../types/types";


export const logReducer = (state = initialStateUser , action) => {
    
    switch (action.type) {
        case types.login:
            const {username,email,rol, token} = action.payload
            localStorage.setItem('token', token)
            return{
                ...state,
                login: true,
                user:{
                    username,
                    email,
                    rol
                }
            }
           
        case types.logout:
            return {};
            
        default:
            return state;
    }
}