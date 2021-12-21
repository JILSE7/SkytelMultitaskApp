import { customerReducer } from "./customersReducer";
import { logReducer } from "./logReducer";
import {messageReducer} from "./messageReducer";


export const reducers = {
    auth: logReducer,
    customers: customerReducer,
    message: messageReducer
}
