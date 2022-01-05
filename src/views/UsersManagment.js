import { Space, Table, Tag, Tooltip } from 'antd'
import { useState } from 'react';
import { useEffect } from 'react'
import { FcAddressBook, FcBusinesswoman, 
         FcCalendar,FcClock,FcFeedback, 
         FcFlashOn, FcKey, 
         FcOk, FcSupport, FcViewDetails 
}from 'react-icons/fc'

import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../actions/users';
import DrawerGeneric from '../components/DrawerGeneric';
import { renderIconWToolTip } from '../helpers/drawer';



const UsersManagment = () => {
    //Redux
    const dispatch = useDispatch();
    //Store
    const {users:multitask = []} = useSelector(state => state.usersMultitask);
    //States
    const [drawer, setDrawer] = useState({visible: false});
    //Handlers
    const showDrawer = (pin, name) =>{
      setTimeout(() => setDrawer({visible:true, pin, name}), 150);
    };
    const onClose = () => setDrawer({...drawer,visible:false});
    
     //dataTable
     const columns = [
      
         {
          title: renderIconWToolTip(FcBusinesswoman, 'Nombre Usuario'),
          dataIndex: 'Username',
          align: 'center',
          render: text => <p>{text}</p>,
        },
        {
          title: renderIconWToolTip(FcAddressBook, 'Email Usuarios'),
          dataIndex: 'Email',
          render: text => <p>{text}</p>,
        },
        {
          title: renderIconWToolTip(FcKey, 'Rol del usuario'),
          dataIndex: 'Rol',
          align: 'center',
          render: text => <p>{text}</p>,
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
          render: (text, record) =>  <p key={record.Id}>{text}</p>,
          
        },
        {
            title: renderIconWToolTip(FcClock, 'Ultimo inicio de sesión'),
            dataIndex: 'Ultimo_Login',
            align: 'center',
            render: (text, record) =>  <p key={record.Id}>{(text) ? text : `No ha iniciado sesion`}</p>,
            
          },
        {
          title: renderIconWToolTip(FcFlashOn, "Acciones"),
          key: 'action',
          align: 'center',
          render: (text, record) => (
            <Space  size="middle">
              <Tooltip title="Modificar usuario">
                <FcSupport size={'2em'} onClick={showDrawer} />
              </Tooltip>
            </Space>
          ),
        },
        ];

    useEffect(() => {
        if(multitask.length === 0){
            dispatch(getUsers());        
        }
    }, [dispatch, multitask]);

    return (
        <div >
            <div className='Header_Table_Customer flex  items-center justify-evenly'>
              <h2>¿Quieres buscar a un usuario?</h2>
              <div className='Header_Table_Customer_Search flex items-center'>
                <input type={"text"} placeholder='username' />
                {/* <FcSearch size={"2em"}/> */}
              </div>
            </div>
            <Table columns={columns} dataSource={multitask}  size="medium"  bordered/>
            <DrawerGeneric drawer={drawer} onClose={onClose} name={drawer.name}/> 
        </div>
    )
}

export default UsersManagment
