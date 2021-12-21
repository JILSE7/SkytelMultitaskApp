import AutoCompleteUser from '../components/AutoComplete'


import {FcBusinesswoman, FcSms,FcExternal} from 'react-icons/fc';
import { useForm } from '../Hooks/useForm';
import { initialMessage } from '../helpers/initialState';
import { toast } from 'react-toastify';
import { toastInfo, toastMessage } from '../helpers/toast';
import { generateDate } from '../helpers/generateDate';
import useUser from '../Hooks/useUser';
import { fetchFunction } from '../helpers/fetch';
import { useDispatch } from 'react-redux';
import { sendMessage, setMessage } from '../actions/message';



const Messages = () => {
    //Redux
    const dispatch = useDispatch();
    //Hooks
    const {username} = useUser();
    const [values, handleInputChange] = useForm(initialMessage);
    

    //Submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!values.pin){
         toastMessage("Falta el pin de destino");
         return;
        }
        if(!values.msg){
         toastMessage("Falta escribir un mensaje")
         return;
        }

        //Agregar Fecha
         values.date = generateDate();
         //Agregar usuario
         values.user = username
         //Notificacion de envio de mensaje
         toastInfo();
         //Establecer el mensaje en la store
         dispatch(setMessage(values));
         //Mandando el mensaje
         const resp =  await dispatch(sendMessage());
         //Respuesta del mensaje con notificacion
         (resp) ? toastMessage("Excelente, Mensaje Enviado", true) : 
                  toastMessage("No se ha podido enviar el mensaje, comunicate con el administrador");

    }

    
    return (
        <div className='container_message flex flex-col '>
            
            <h1 className='self-center justify-self-center justify-items-center'>Enviemos un mensaje</h1>
            
            <div className='self-center'>
                <form className='container_message_form flex flex-col items-center'>
                    <FcBusinesswoman size={"3em"}/>
                    <AutoCompleteUser message={values}  />
                    <FcSms size={"3em"}/>
                    <textarea placeholder='Escriba el mensaje' value={values.msg} name='msg' onChange={handleInputChange} />
                    <span className='duration-300'>Recuerda que un mensaje esta limitado a 500 caracteres</span>
                    <button type='submit' onClick={handleSubmit} >
                        <FcExternal size={"4em"} className='cursor-pointer'/>
                    </button>
                    <span className='duration-300'>Enviar mensaje</span>
                </form>
            </div>
        </div>
    )
}

export default Messages;
