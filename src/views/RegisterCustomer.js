//import { Select } from 'antd';
import { FcAddressBook, FcAssistant, FcNext, FcSelfServiceKiosk } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { setNewCustomer } from '../actions/customers';
import { initialNewCustomer } from '../helpers/initialState';
import { toastInfo, toastMessage } from '../helpers/toast';
import { useForm } from '../Hooks/useForm';

//const { Option } = Select;

const RegisterCustomer = () => {
    const [values, handleInputChange] = useForm(initialNewCustomer);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //VALIDACIONES
        if(!values.nombre) return toastMessage("😑 Nombre no puede ir vacio");
        if(!values.pin) return toastMessage("😑 Pin no puede ir vacio");
        if(!values.destino) return toastMessage("😑 Destino no puede ir vacio");
        
        //AGREGANDO LOS CAMPOS RESTANTES
        values.capcode = `E${values.pin}`;
        values.ruteo = "smtp";
        values.estado = "1";
        
       

       

       
       
       toastInfo("😎 Procesando Solicitud");
       //EXTRAYENDO IMAGEN
        
       //Registrar usuario
        dispatch(setNewCustomer(values));
        
    }
    return (
        <>
        <h2 className='title text-center mt-5'>Nuevos Clientes</h2>
        <div className="container_register flex flex-col justify-center items-center" >
              <form className='container_register_form flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
                  <h3>¿A quien registraremos hoy?</h3>
                  <div className='flex items-center'>
                    <FcAssistant size={"1.5em"}/>
                    <label>Nombre del cliente</label>
                  </div>
                    <input type="text" name='nombre'  onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcAddressBook size={"1.5em"}/>
                        <label>Email de destino</label>
                    </div>
                    <input type="email" name='destino' onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcAddressBook size={"1.5em"}/>
                        <label>¿Email Copia?</label>
                    </div>
                    <input type="email" name='copia' onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcSelfServiceKiosk size={"1.5em"}/>
                        <label>Pin</label>
                    </div>
                    <input type="text" name='pin'  onChange={handleInputChange}/>
                    
                    <button type='submit' className='flex flex-col items-center'>
                        Registrar
                        <FcNext size={"1.5em"}/>
                    </button>
                </form>
        </div>
        </>
    )
}

export default RegisterCustomer
