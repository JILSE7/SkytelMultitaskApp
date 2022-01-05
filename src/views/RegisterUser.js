import { Select } from 'antd';
import { FcAddressBook, FcAssistant, FcEngineering, FcKey, FcNext, FcPanorama } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUser } from '../actions/users';
import { initialNewUser } from '../helpers/initialState';
import { toastInfo, toastMessage } from '../helpers/toast';
import { userStoreVerify } from '../helpers/usersVeify';
import { useForm } from '../Hooks/useForm';

const { Option } = Select;

const RegisterUser = () => {
    //REDUX
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.usersMultitask);
    //STATE
    const [values, handleInputChange] = useForm(initialNewUser);
    //HANDLES
    function handleChange(value) {
        if(value !== "Seleccione un tipo")values.Rol = value;
      }

    const handleSubmit = (e) => {
        e.preventDefault();
       //VALIDACIONES
       if(!values.Username) return toastMessage("Nombre de usuario no puede ir vacio");
       if(!values.Email) return toastMessage("Email no puede ir vacio");
       if(!values.Password) return toastMessage("La contraseña no puede estar vacia");
       if(!values.Confirm) return toastMessage("La confirmacion de constraseña no puede ir vacia");
       if(values.Confirm !== values.Password) return toastMessage("Las contraseñas no son iguales");
       if(!values.Rol) return toastMessage("No se ha seleccionado ningun tipo de usuario");

       //VERIFCACION CONTRA LA STORE PARA EL USUARIO
       const verifyStore = userStoreVerify(users,values);
       if(verifyStore) return toastMessage(verifyStore);

       values.Estado = "1";
       
       toastInfo("Procesando Solicitud");
       //EXTRAYENDO IMAGEN
       var file = document.querySelector('#fileSelector');
        file = (file.files[0]) ? file.files[0] : false
        
       //Registrar usuario
        dispatch(startRegisterUser(values, file))
        
    }
    return (
        <>
        <h2 className='title text-center mt-5'>Nuevos Usuarios</h2>
        <div className="container_register flex flex-col justify-center items-center">
              <form className='container_register_form flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
                  <h3>¿A quien registraremos hoy?</h3>
                  <div className='flex items-center'>
                    <FcAssistant size={"1.5em"}/>
                    <label>Nombre de usuario</label>
                  </div>
                    <input type="text" name='Username' value={values.Username} onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcAddressBook size={"1.5em"}/>
                        <label>Email</label>
                    </div>
                    <input type="email" name='Email' value={values.Email} onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcKey size={"1.5em"}/>
                        <label>Contraseña</label>
                    </div>
                    <input type="password" name='Password' value={values.Password} onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcKey size={"1.5em"}/>
                        <label>Confirmacion Contraseña</label>
                    </div>
                    <input type="password" name='Confirm' value={values.Confirm} onChange={handleInputChange}/>
                    <div className='flex items-center'>
                        <FcEngineering size={"1.5em"}/>
                        <label>Tipo de usuario</label>
                        
                    </div>
                    <Select defaultValue="Seleccione un tipo" style={{ width: 180 }} onChange={handleChange}>
                        <Option value="user">Usuario</Option>
                        <Option value="admin">Administrador</Option>
                    </Select>

                    <div className='flex items-center'>
                        <FcPanorama size={"1.5em"}/>
                        <label>¿Foto?</label>
                        
                    </div>
                    <input id='fileSelector' type="file" accept=".png, .jpg, .jpeg"/>
                    <button type='submit' className='flex flex-col items-center'>
                        Registrar
                        <FcNext size={"1.5em"}/>
                    </button>
                </form>
        </div>
        </>
    )
}

export default RegisterUser
