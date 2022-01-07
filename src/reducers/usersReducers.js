
import { initialMultitask } from "../helpers/initialState";
import { types } from "../types/types";



const usersReducers = (state = initialMultitask,action) => {
    switch (action.type) {
        case types.setUsers:
            const users = action.payload
        return{
            users: [...users]
        };

        case types.activeUser:
        return{
            ...state, 
            active: true,
            activeUser: {...action.payload},
        };

        case types.inactiveUser: 
        return {
            ...state,
            active: false,
            activeUser : {}
        };

        case types.updateUser:
        return state;

        case types.updateUserPassword:
            return state;
        case types.deleteUser:
            return state;
        case types.registerUser:
            return state;
        case types.logout:
            return{
                initialMultitask
            };
    
        default:
            return state;
    }
}

export default usersReducers
