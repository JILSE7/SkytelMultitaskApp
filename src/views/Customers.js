import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table, Tag, Space, Tooltip } from 'antd';

//Drawer
import DrawerHistoric from '../components/DrawerHistoric'

//Icons
import {FcViewDetails, FcFeedback, 
        FcBusinesswoman, FcCellPhone, 
        FcCopyleft, FcCopyright, 
        FcOk, FcFlashOn,
        FcSearch, FcLock,
        FcUnlock
      } from 'react-icons/fc';

//Custom Hook
import useCustomers from '../Hooks/useCustomers';
import { useForm } from '../Hooks/useForm';
import useUser from '../Hooks/useUser';
//Actions
import { getCustomerByPin, lockService, unlockService } from '../actions/customers';
//Helper
import { renderIconWToolTip } from '../helpers/drawer';
import { lockAlert } from '../helpers/alert';



const Customers = () => {
    //React Router
    const navigate = useNavigate();

    //Redux
    const dispatch = useDispatch();
    
    //CustomHooks
    const {customers} = useCustomers();
    const {rol} = useUser()
    
    //Hooks
    const [drawer, setDrawer] = useState({visible: false, pin:"", name: ""});
    const [values, handleInputChange] = useForm({search:""});
    //State
    const [customerFiltereds, setCustomerFiltereds] = useState([]);

    
    useEffect(() => {
      if(customers){
        setCustomerFiltereds(customers.filter(customer => customer.Nombre?.includes(values.search) || 
                                     customer.Nombre?.includes(values.search[0].toUpperCase() +  values.search.slice(1)) || 
                                     customer.Nombre?.includes(values.search.toUpperCase())||
                                     customer.Pin.includes(values.search)
                        ));
      }
    }, [values, customers]);



    //handleDrawer
    const showDrawer = (pin, name) =>{
      drawer.pin !== pin ? dispatch(getCustomerByPin(pin)): console.log("no es necesario llamamrme");
      setTimeout(() => setDrawer({visible:true, pin, name}), 150);
    };
    const onClose = () => setDrawer({...drawer,visible:false});
    //unloc & lock Service
     const lockServiceFunction = async(nombre,pin) => {
       const {isConfirmed} = await lockAlert(nombre, pin);
       if(isConfirmed) dispatch(lockService(pin));
    };

     const unlockServiceFunction = async(nombre,pin) => {
       const {isConfirmed} = await lockAlert(nombre, pin,false);
       if(isConfirmed) dispatch(unlockService(pin));    
     }
     const columns = [
      
      {
        title: renderIconWToolTip(FcBusinesswoman, 'Nombre del cliente'),
        dataIndex: 'Nombre',
        render: text => <p className='bg-sky-100 rounded-lg'>{text}</p>,
      },
      {
        title: renderIconWToolTip(FcCellPhone, 'Pin'),
        dataIndex: 'Pin',
        align: 'center',
        render: text => <p className='bg-sky-100 rounded-lg'>{text}</p>,
      },
      {
        title: <Tooltip title="CapCode"><p className='flex justify-center items-center'> <FcCopyright size={"2em"}/><FcCopyleft size={"2em"}/></p></Tooltip>,
        dataIndex: 'CapCode',
        align: 'center',
        render: text => <p className='bg-sky-100 rounded-lg'>{text}</p>,
      }, 
      {
        title: renderIconWToolTip(FcOk, 'Status del cliente'),
        dataIndex: 'Estado',
        align: 'center',
        render: state=>  <Tag color={(state > 0) ? 'green' : 'volcano'} key={`${state}`}>{state === '0' ? "Inactivo" : "Activo"}</Tag>
      },
      {
        title: renderIconWToolTip(FcFlashOn, "Acciones"),
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <Space  size="middle">
            <Tooltip title="Enviar Mensaje">
              <FcFeedback size={'2em'} onClick={() => navigate('/mensajes/' + record.Pin)}/>
            </Tooltip>
            <Tooltip title="Historico">
              <FcViewDetails onClick={()=> showDrawer(record.Pin, record.Nombre)} size={'2em'}/>
            </Tooltip>
            {
              rol === "admin" && (
                (record.Estado === '1') ? 
                        (
                        <Tooltip title="Bloquear Servicio">
                           
                            <FcLock onClick={()=> lockServiceFunction(record.Nombre,record.Pin)} size={'2em'}/>
                        </Tooltip>
                        ) : (
                        <Tooltip title="Desbloquear Servicio">
                          <FcUnlock onClick={()=> unlockServiceFunction(record.Nombre,record.Pin)} size={'2em'}/>
                        </Tooltip>
                        )
              )
            }
          </Space>
        ),
      },
      ]


    


    return (
        <div>
            <div className='Header_Table_Customer flex  items-center justify-evenly'>
              <h2>¿Quieres buscar a un usuario?</h2>
              <div className='Header_Table_Customer_Search flex items-center'>
                <input type={"text"} placeholder='Nombre, Pin o Username' value={values.search} name="search" onChange={handleInputChange}/>
                <FcSearch size={"2em"}/>
              </div>
            </div>
            <Table columns={columns} dataSource={(values.search) ? customerFiltereds : customers} size="medium"  bordered/>
            <DrawerHistoric drawer={drawer} onClose={onClose} name={drawer.name}/>
        </div>
    )
}

export default Customers

