import { fetchFunction } from "../helpers/fetch";
import { types } from "../types/types";

const setUsers = (users) => ({
    type:types.setUsers,
    payload: users
});


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
}