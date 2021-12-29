
import { initialMultitask } from "../helpers/initialState";
import { types } from "../types/types";



const usersReducers = (state = initialMultitask,action) => {
    switch (action.type) {
        case types.setUsers:
            const users = action.payload
            console.log(users);
        return{
            users: [...users]
        };

        case types.updateUser:
            const updateUser = action.payload;
            console.log(updateUser);
        return state;

        case types.deleteUser:
            
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
