import { useState, useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Hooks
import { useForm } from '../Hooks/useForm';
//Ant
import { Space, Table, Tag, Tooltip } from 'antd'
//Icons
import { FcAddressBook, FcBusinesswoman, 
         FcCalendar,FcClock,
         FcFlashOn, FcKey, 
         FcOk, FcSearch, FcSupport
}from 'react-icons/fc'
//Components
import DrawerGeneric from '../components/DrawerGeneric';
//Actions
import { activeUserStore, getUsers, inactiveUserStore } from '../actions/users';
//Helpers
import { renderIconWToolTip } from '../helpers/drawer';



const UsersManagment = () => {
    //Redux
    const dispatch = useDispatch();
    //Store
    const {users:multitask = []} = useSelector(state => state.usersMultitask);
    //States
    const [drawer, setDrawer] = useState({visible: false});
    const [userFiltereds, setUserFiltereds] = useState([]);

    //CustomHook
    const [values, handleInputChange] = useForm({search:""});
    //Handlers
    const showDrawer = (user) =>{
      dispatch(activeUserStore({
        Username: user.Username,
        Email: user.Email,
        Rol: user.Rol,
        Estado: user.Estado,
        Imagen: user.Imagen
      }));
      setDrawer({visible:true});
    };
    const onClose = () =>{
      dispatch(inactiveUserStore());
      setDrawer({visible:false});
    }

    useEffect(() => {
      if(multitask){
        setUserFiltereds(multitask.filter(customer => customer.Username?.includes(values.search) || 
                                     customer.Username?.includes(values.search[0].toUpperCase() +  values.search.slice(1)) || 
                                     customer.Username?.includes(values.search.toUpperCase())||
                                     customer.Email.includes(values.search)
                        ));
      }
    }, [values, multitask]);
    
     //dataTable
     const columns = [
      
         {
          title: renderIconWToolTip(FcBusinesswoman, 'Nombre Usuario'),
          dataIndex: 'Username',
          align: 'center',
          render: (text, record) => (
            <div className='flex items-center bg-sky-100 rounded-lg'>
            <img className='logo' src={record.Imagen} alt='fotoPerfil'/>
            <p className='m-0'>{text}</p>
          </div>
          )
        },
        {
          title: renderIconWToolTip(FcAddressBook, 'Email Usuarios'),
          dataIndex: 'Email',
          render: text => <p className='bg-sky-100 rounded-lg m-0 text-center'>{text}</p>,
        },
        {
          title: renderIconWToolTip(FcKey, 'Rol del usuario'),
          dataIndex: 'Rol',
          align: 'center',
          render: text => <p className='bg-sky-100 rounded-lg m-0 text-center'>{text}</p>,
        }, 
        {
          title: renderIconWToolTip(FcOk, 'Status del cliente'),
          dataIndex: 'Estado',
          align: 'center',
          render: state=>  <Tag color={(state > 0) ? 'green' : 'volcano'} key={`${state}`}>{state === '0' ? "Inactivo" : "Activo"}</Tag>
        },
        {
          title: renderIconWToolTip(FcCalendar, 'Alta del usuario'),
          dataIndex: 'Alta_Usuario',
          align: 'center',
          render: (text, record) =>  <p className='bg-sky-100 rounded-lg m-0 text-center' key={record.Id}>{text}</p>,
          
        },
        {
            title: renderIconWToolTip(FcClock, 'Ultimo inicio de sesión'),
            dataIndex: 'Ultimo_Login',
            align: 'center',
            render: (text, record) =>  <p className='bg-sky-100 rounded-lg m-0 text-center' key={record.Id}>{(text) ? text : `No ha iniciado sesion`}</p>,
            
          },
        {
          title: renderIconWToolTip(FcFlashOn, "Acciones"),
          key: 'action',
          align: 'center',
          render: (text, record) => (
            <Space  size="middle">
              <Tooltip title="Modificar usuario">
                <FcSupport size={'2em'} onClick={()=> showDrawer(record)} />
              </Tooltip>
            </Space>
          ),
        },
        ];
    
    //EFECTO PARA TRAER LOS USUARIOS SI NO ESTAN
    useEffect(() => {if(multitask.length === 0)dispatch(getUsers()) }, [dispatch, multitask]);

    return (
        <div >
            <div className='Header_Table_Customer flex  items-center justify-evenly'>
              <h2>¿Quieres buscar a un usuario?</h2>
              <div className='Header_Table_Customer_Search flex items-center'>
              <input type={"text"} placeholder='Nombre, Pin o Username' value={values.search} name="search" onChange={handleInputChange}/>
                <FcSearch size={"2em"}/> 
              </div>
            </div>
            <Table columns={columns} dataSource={(values.search) ? userFiltereds : multitask} size="medium"  bordered/>
            <DrawerGeneric drawer={drawer} onClose={onClose} name={drawer.user?.Username} user={drawer.user}/> 
        </div>
    )
}

export default UsersManagment
