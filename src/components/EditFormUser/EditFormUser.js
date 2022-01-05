import { Select } from "antd"
import { FcAddressBook, FcAssistant, FcEngineering, FcKey, FcNext } from "react-icons/fc"
const { Option } = Select;

const EditFormUser = ({user}) => {
    return (

          <div className="container_edit flex flex-col items-center justify-center">
                <h3>Estamos Editando a </h3>
                <form className="container_edit_form flex flex-col items-center justify-between">
                    <div className='flex items-center'>
                        <FcAssistant size={"1.5em"}/>
                        <label>Nombre de usuario</label>
                    </div>
                    <input className="container_edit_form_input" type="text" name='Username' />
                    <div className='flex items-center'>
                        <FcAddressBook size={"1.5em"}/>
                        <label>Email</label>
                    </div>
                    <input className="container_edit_form_input"  type="email" name='Email' />
                    <div className='flex items-center'>
                        <FcKey size={"1.5em"}/>
                        <label>Contraseña</label>
                    </div>
                    <input className="container_edit_form_input"  type="password" name='Password' />
                    <div className='flex items-center'>
                        <FcKey size={"1.5em"}/>
                        <label>Confirmacion Contraseña</label>
                    </div>
                    <input type="password" name='Confirm'/>
                    <div className='flex items-center'>
                        <FcEngineering size={"1.5em"}/>
                        <label>Tipo de usuario</label>
                    </div>
                    <Select defaultValue="Seleccione un tipo" style={{ width: 180 }} >
                        <Option value="user">Usuario</Option>
                        <Option value="admin">Administrador</Option>
                    </Select>
                </form>
                    
           </div>      
    )
}

export default EditFormUser
