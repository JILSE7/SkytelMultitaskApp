import { customerReducer } from "./customersReducer";
import { logReducer } from "./logReducer";
import {messageReducer} from "./messageReducer";
import usersReducers from "./usersReducers";


export const reducers = {
    auth: logReducer,
    customers: customerReducer,
    message: messageReducer,
    usersMultitask: usersReducers
}
