import AutoCompleteUser from '../components/AutoComplete'


import {FcBusinesswoman, FcSms,FcExternal} from 'react-icons/fc';


const Messages = () => {
    return (
        <div className='container_message flex flex-col '>
            
            
                <h1 className='self-center justify-self-center justify-items-center'>Enviemos un mensaje</h1>
            
            <div className='self-center'>
                <form className='container_message_form flex flex-col items-center'>
                    <FcBusinesswoman size={"3em"}/>
                    <AutoCompleteUser />
                    <FcSms size={"3em"}/>
                    <textarea placeholder='Escriba el mensaje' />
                    <span className='duration-300'>Recuerda que un mensaje esta limitado a 500 caracteres</span>
                    <button >
                        <FcExternal size={"4em"}/>
                    </button>
                    <span className='duration-300'>Enviar mensaje</span>
                </form>
            </div>
        </div>
    )
}

export default Messages;
