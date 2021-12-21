import { fetchFunction } from "../helpers/fetch"
import { types } from "../types/types"


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

            if(resp.ok){
                dispatch({type: types.sendMessage, payload:{ok:true}});
                return true
            }else{
                dispatch({type: types.sendMessage, payload:{ok:false}});
                return false
            }
        } catch (error) {
            console.log(error);
        }
        
    }
}
