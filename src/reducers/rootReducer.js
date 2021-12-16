import { customerReducer } from "./customersReducer";
import { logReducer } from "./logReducer";


export const reducers = {
    auth: logReducer,
    customers: customerReducer
}
