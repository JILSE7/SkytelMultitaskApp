import { Space, Table, Tag, Tooltip } from 'antd'
import { useEffect } from 'react'
import { FcAddressBook, FcBusinesswoman, FcCalendar, FcCellPhone, FcCopyleft, FcCopyright, FcFeedback, FcFlashOn, FcKey, FcLock, FcOk, FcViewDetails } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUsers } from '../actions/users'
import { renderIconWToolTip } from '../helpers/drawer'



const UsersManagment = () => {
    //Store
    const {users:multitask} = useSelector(state => state.usersMultitask);
    //Redux
    const dispatch = useDispatch();
    
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
            title: renderIconWToolTip(FcCalendar, 'Ultimo inicio de sesión'),
            dataIndex: 'Ultimo_Login',
            align: 'center',
            render: (text, record) =>  <p key={record.Id}>{text}</p>,
            
          },
        {
          title: renderIconWToolTip(FcFlashOn, "Acciones"),
          key: 'action',
          align: 'center',
          render: (text, record) => (
            <Space  size="middle">
              <Tooltip title="Enviar Mensaje">
                <FcFeedback size={'2em'} onClick={() => Navigate('/mensajes/' + record.Pin)}/>
              </Tooltip>
              <Tooltip title="Historico">
                <FcViewDetails size={'2em'}/>
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
            {/* <DrawerHistoric drawer={drawer} onClose={onClose} name={drawer.name}/> */}
        </div>
    )
}

export default UsersManagment
