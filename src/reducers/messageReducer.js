import { initialMessage } from "../helpers/initialState"
import { types } from "../types/types"





export const messageReducer = (state = initialMessage, action) => {
    switch(action.type) {
        
        case types.setMessage:
        return{
            ...state,
            ...action.payload
        };

        case types.sendMessage: 
        return{
            ...state,
            ...action.payload
        };

        default: 
        return state;
    }
}

