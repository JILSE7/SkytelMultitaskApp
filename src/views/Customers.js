import { Table, Tag, Space, Tooltip } from 'antd';
import useCustomers from '../Hooks/useCustomers';

//Drawer
import DrawerHistoric from '../components/DrawerHistoric'

//Icons
import {FcViewDetails, FcFeedback, FcBusinesswoman, FcCellPhone, FcCopyleft, FcCopyright, FcOk, FcFlashOn} from 'react-icons/fc';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCustomerByPin } from '../actions/customers';


const Customers = () => {
    //Redux
    const {customers} = useCustomers();
    const dispatch = useDispatch();
    //handleDrawer
    const [drawer, setDrawer] = useState({visible: false});
    const showDrawer = (pin) =>{
      
      
      dispatch(getCustomerByPin(pin))
      setDrawer({visible:true})
    };
    const onClose = () => setDrawer({visible:false});
  
    
    const columns = [
      
    {
      title: renderIconWToolTip(FcBusinesswoman, 'Nombre del cliente'),
      dataIndex: 'Nombre',
      render: text => <p>{text}</p>,
    },
    {
      title: renderIconWToolTip(FcCellPhone, 'Pin'),
      dataIndex: 'Pin',
      align: 'center',
      render: text => <p>{text}</p>,
    },
    {
      title: <Tooltip title="CapCode"><p className='flex justify-center items-center'> <FcCopyright size={"2em"}/><FcCopyleft size={"2em"}/></p></Tooltip>,
      dataIndex: 'CapCode',
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
      title: renderIconWToolTip(FcFlashOn, "Acciones"),
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <Space  size="middle">
          <Tooltip title="Enviar Mensaje">
            <FcFeedback size={'2em'}/>
          </Tooltip>
          <Tooltip title="Historico">
            <FcViewDetails onClick={()=> showDrawer(record.Pin)} size={'2em'}/>
          </Tooltip>
        </Space>
      ),
    },
    ]


    return (
        <div >
            <Table columns={columns} dataSource={customers} size="medium"  bordered/>
            <DrawerHistoric drawer={drawer} onClose={onClose}/>
        </div>
    )
}

export default Customers

const renderIconWToolTip = (Icon, tooltip , Icon2) => {

  return <Tooltip title={tooltip}>
            <p className='flex justify-center items-center'> 
              <Icon size={"2em"}/>
              </p>
          </Tooltip>
};
