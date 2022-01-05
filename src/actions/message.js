import { fetchFunction } from "../helpers/fetch"
import { types } from "../types/types"
import { setNewCountMessages } from "./auth"


export const setMessage = (bodyMessage) => {
    return {
        type: types.setMessage,
        payload : bodyMessage
        }
}


export const sendMessage = () => {
    return async(dispatch, store) => {
        try {
            const {message} = store();
            const resp = await (await fetchFunction('/Email/sendMessage', message, 'POST')).json();
            //ENVIO DE MENSAJE, DEBE REGISTRARSE SI EL MENSAJE NO HA SIDO ENTREGADO
            if(resp.ok){
                //CARGA DE MENSAJE A LA STORE CON STATUS TRUE
                dispatch({type: types.sendMessage, payload:{ok:true}});
                try {   
                    const count = await (await fetchFunction('Email/countMessages')).json();
                    if(count.ok){
                     dispatch(setNewCountMessages(count.result))
                    }
                } catch (error) {
                    console.log(error);
                }
                return true;

            }else{
                //CARGA DE MENSAJE A LA STORE CON STATUS FALSE
                console.log(resp);
                dispatch({type: types.sendMessage, payload:{ok:false}});
                return false
            }

        } catch (error) {
            console.log(error);
        }
        
    }
}
