import { Select } from 'antd';
import { useState } from 'react';
import { FcAddressBook, FcAssistant, FcEngineering, FcKey, FcNext, FcSelfServiceKiosk } from 'react-icons/fc';
import { initialNewUser } from '../helpers/initialState';
import { useForm } from '../Hooks/useForm';

const { Option } = Select;

const RegisterCustomer = () => {
    const [values, handleInputChange] = useForm(initialNewUser);
    function handleChange(value) {
        if(value !== "Seleccione un tipo")values.Rol = value;
      }
    return (
        <>
        <h2 className='title text-center mt-5'>Nuevos Clientes</h2>
        <div className="container_register flex flex-col justify-center items-center" >
              <form className='container_register_form flex flex-col justify-evenly items-center'>
                  <h3>¿A quien registraremos hoy?</h3>
                  <div className='flex items-center'>
                    <FcAssistant size={"1.5em"}/>
                    <label>Nombre del cliente</label>
                  </div>
                    <input type="text" name='Username'  onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcAddressBook size={"1.5em"}/>
                        <label>Email de destino</label>
                    </div>
                    <input type="email" name='Email' onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcAddressBook size={"1.5em"}/>
                        <label>¿Email Copia?</label>
                    </div>
                    <input type="email" name='Email2' onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcSelfServiceKiosk size={"1.5em"}/>
                        <label>Pin</label>
                    </div>
                    <input type="text" name='Pin'  onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcKey size={"1.5em"}/>
                        <label>Clave de uso</label>
                    </div>
                    <input type="text" name='CU'  onChange={handleInputChange}/>
                    
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
