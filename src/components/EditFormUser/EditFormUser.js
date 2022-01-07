import { useState,useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Hooks
import { useForm } from "../../Hooks/useForm";
//Ants
import { Select } from "antd";
//Icons
import { FcAddressBook, FcAssistant, FcEngineering, FcNext, FcPanorama } from "react-icons/fc"
import {RiLockPasswordLine} from 'react-icons/ri';
//Actions
import { changeDataUser, changePasswordUser } from "../../actions/users";
//Helpers
import { changePasswordAlert, selectPicture } from "../../helpers/alert";
//InitialState
import { initialUpdateUser } from "../../helpers/initialState";

const { Option } = Select;

const EditFormUser = ({drawer}) => {
    
    //REDUX
    const dispatch = useDispatch();
    const {active, activeUser} = useSelector(state => state.usersMultitask);
    //CUSTOM HOOK
    const [values, handleInputChange, , setValues] = useForm((!active) ? initialUpdateUser : activeUser);
    //STATE
    const [fileState, setFileState] = useState(undefined);

    //SELECT
    function handleChangeRol(value) {
        if(value !== "Seleccione un tipo")values.Rol = value;
      }
      const handleChangeEstado = (value) => {
        if(value !== values.Estado)values.Estado = value;
    }
    //Handles
    const changePassword = async() => {
        const confirmPassword = await changePasswordAlert();
        console.log(confirmPassword);
        if(confirmPassword){
            dispatch(changePasswordUser({Username: activeUser.Username, password: confirmPassword}));
        }
    };

    const handlePicture = async() => {
        await selectPicture(setFileState);
     }

    //ONSUBMIT
    const changeData = (e) => {
        e.preventDefault();
        //console.log(values);
        dispatch(changeDataUser(values, (fileState)? fileState : false))
    }
 
    

    
    useEffect(() => {
        setValues((!active) ?  initialUpdateUser:activeUser);
        if(!drawer.visible) setFileState(undefined);
    }, [active, activeUser, setValues, drawer]);
    


    

    
    return (

          <div className="container_edit flex flex-col items-center justify-center">
                <form className="container_edit_form flex flex-col items-center justify-evenly" onSubmit={changeData}>
                <h3 className="title">Editando a {values.Username}</h3>
                    <div className='flex flex-col items-center'>
                        <div className="flex">
                            <FcAssistant size={"1.5em"}/>
                            <label>Nombre de usuario</label>
                        </div>
                        <input className="container_edit_form_input" type="text" name='Username' value={values?.Username} onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="flex">
                            <FcAddressBook size={"1.5em"}/>
                            <label>Email</label>
                        </div>
                        <input className="container_edit_form_input"  type="email" name='Email' value={values?.Email} onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col items-center'>
                    <label>¿Subir foto?</label>
                        <FcPanorama size={"1.5em"} className='cursor-pointer' onClick={handlePicture}/>
                        {fileState  && fileState.name}
                    </div>
                    
                    <div className='flex flex-col items-center'>
                        <div className="flex"> 
                            <FcEngineering size={"1.5em"}/>
                            <label>Tipo de usuario</label>
                        </div>
                        <Select defaultValue="Seleccione un tipo" style={{ width: 180 }}  onChange={handleChangeRol}>
                            <Option value="user">Usuario</Option>
                            <Option value="admin">Administrador</Option>
                        </Select>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="flex"> 
                            <FcEngineering size={"1.5em"}/>
                            <label>Estado</label>
                        </div>
                        <Select defaultValue={values.Estado} style={{ width: 180 }}  onChange={handleChangeEstado}>
                            <Option value="1">Activo</Option>
                            <Option value="0">Inactivo</Option>
                        </Select>
                    </div>
                    
                    <button type='submit'  className='flex flex-col items-center'>
                        Actualizar
                        <FcNext size={"1.5em"}/>
                    </button>
                    <p  className="cursor-pointer hover:underline flex items-center m-0"
                        onClick={changePassword}
                    >
                            ¿Cambiar la contraseña? 
                            <RiLockPasswordLine/> 
                    </p>
                </form>
           </div>      
    )
}

export default EditFormUser
