import { initialStateCustomers, initialStateUser } from "../helpers/initialState";
import { types } from "../types/types";


export const customerReducer = (state = initialStateCustomers , action) => {
    
    switch (action.type) {
        case types.login:
            
            
            return state;
           
        case types.logout:
            return {};
            
        default:
            return state;
    }
}