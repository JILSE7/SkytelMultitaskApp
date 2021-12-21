import { initialStateCustomers } from "../helpers/initialState";
import { types } from "../types/types";


export const customerReducer = (state = initialStateCustomers , action) => {
    
    switch (action.type) {
        case types.setCustomers:
            return{
                ...state,
                users : action.payload
            }

        case types.logout:
            return {};
        
            case types.getCustomerByPin:
                return{
                    ...state,
                    userHistoric: action.payload[0],
                    pin: action.payload[1]
                }
            
        default:
            return state;
    }
}