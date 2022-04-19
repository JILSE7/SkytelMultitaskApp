import { saveAction } from "../helpers/alert";
import { fetchFunction } from "../helpers/fetch"
import { toastMessage } from "../helpers/toast";
import { types } from "../types/types";


const setCustomers = (customers) => ({
    type:types.setCustomers,
    payload: customers
});

export const deleteCustomers = () => ({
    type: types.deleteCustomers
});

export const getCustomers = () => {
    return async(dispatch) => {

        try {
            const customers = await (await fetchFunction('Cliente/clientes')).json();
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


export const unlockService = (pin) => {
    return async(dispatch,store) => {
        
        //console.log("tengo de desbloquear a" + pin);
        const resp = await (await fetchFunction(`Email/unlockedMessages`, {pin}, "PUT")).json();
        

        if(resp){
            try {
             const customers = await (await fetchFunction('Cliente/clientes')).json();
             saveAction("Informacion actualizada");
             toastMessage(`💃 Se ha reactivado el servicio de ${pin}`, true);
             dispatch(setCustomers(customers.data));

            } catch (error) {
             console.log(error);   
            }
        }
        


    }
}


export const lockService = (pin) => {
    return async(dispatch,store) => {
        

        try {
            const resp = await (await fetchFunction(`Email/lockedMessages`, {pin}, "PUT")).json();
            //console.log(resp);
    
            if(resp){
                try {
                 const customers = await (await fetchFunction('Cliente/clientes')).json();
                 saveAction("Informacion actualizada");
                toastMessage(`💃 Se ha suspendido el servicio de ${pin}`, true);
                 dispatch(setCustomers(customers.data));
                    
                } catch (error) {
                 console.log(error);   
                }
            }
            
            
        } catch (error) {
            console.log(error);
            //todo alert
        }
        
        
    }
}

export const setNewCustomer = (newCustomer) => {
    return async (dispatch) => {
        console.log(JSON.stringify(newCustomer));

        try {
            const resp = await (await fetchFunction(`/Cliente/clienteRegister`, {newCustomer}, "POST")).json();
            console.log(resp);
            if(resp.ok){
                dispatch(getCustomers());
                return toastMessage(`😎 ${resp.msg}`,true);
            }else{
                return toastMessage(`😎 ${resp.msg}`);
            }   
            
        } catch (error) {
            console.log(error);
        }


    }
}

