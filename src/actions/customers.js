import { fetchFunction } from "../helpers/fetch"
import { types } from "../types/types";


const setCustomers = (customers) => ({
    type:types.setCustomers,
    payload: customers
})

export const getCustomers = () => {
    return async(dispatch) => {

        try {
            const customers = await (await fetchFunction('Cliente/clientes')).json();
            console.log(customers);
            dispatch(setCustomers(customers.data));
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCustomerByPin = (pin) => {
    return async(dispatch) => {
        try {

          const historic = await (await fetchFunction(`Cliente/clienteByPin?pin=${pin}`)).json();

          if(historic.ok) dispatch({ type: types.getCustomerByPin,payload: [historic.data , pin]});
    
        } catch (error) {
            console.log(error);
        }


    }
}