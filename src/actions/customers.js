import { fetchFunction } from "../helpers/fetch"
import { types } from "../types/types";


const setCustomers = (customers) => ({
    type:types.setCustomers,
    payload: customers
})

export const getCustomers = () => {
    return async(dispatch) => {
        const customers = await (await fetchFunction('Cliente/clientes')).json();
        console.log(customers);
        dispatch(setCustomers(customers.data));
    }
}