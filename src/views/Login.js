import React, { useState } from 'react'
import logo from '../assets/cloud.png'



//Icons
import {FcAssistant, FcPrivacy, FcNext} from 'react-icons/fc';

//State login
import {initialStateLogin} from '../helpers/initialState'
import { useForm } from '../Hooks/useForm';
import { startLogin } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';





const Login = () => {
    //Redux
    const dispatch = useDispatch();
    //React Router
    const navigate = useNavigate();
    //Custom Hook
    const [values, handleInputChange] = useForm(initialStateLogin);
    const [error, seterror] = useState({err: false, msg: '' ,class:''});

    


    //handleSubmit
     async function handleSubmit(){
        if(values.Username === ""){
            seterror({err: true, msg:'Porfavor ingrese su usuario', class:"animate__animated animate__fadeInLeft"});
            return;
        }else if(values.Password === "") {
            seterror({err: true, msg:'Porfavor ingrese su contraseña', class:"animate__animated animate__fadeInLeft"});
            return;
        }
        seterror({err: false, msg: 'Excelente', class: 'animate__animated animate__fadeOutRight'});

        const login =  await dispatch(startLogin(values));
        console.log(login);
        
        // eslint-disable-next-line no-unused-expressions
        login ? navigate('/',{replace: true}): null;
        
    }

    return (
        <div className="container_login flex flex-col items-center justify-center">
        
           <h1>¡Hola!, Bienvenido de nuevo</h1>
           <div className="container_login_contact flex flex-col items-center">
                <img src={logo} className="container_login_contact_image" alt='logoSky'/>
                <form className="container_login_contact_form flex flex-col items-center justify-between">
                    <div className="container_login_contact_form_item flex justify-center mb-5">
                        <FcAssistant className="icon"/>
                        <input type="text" placeholder="User" name="Username" value={values.Username} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="container_login_contact_form_item flex justify-center">
                        <FcPrivacy className="icon"/>
                        <input type="password" placeholder="Password" value={values.Password} name="Password" onChange={(e) => handleInputChange(e)} required/>
                    </div>
                    <FcNext className="icon icon-next" onClick={handleSubmit}/>
                    <p>Iniciar Sesion</p>
                </form>
                    {<p className={error.class}>{error.msg}</p>}
           </div>
        
       </div>
    )
}

export default Login
