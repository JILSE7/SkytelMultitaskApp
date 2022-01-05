
import { Drawer,Table, Tag } from 'antd';
import { useSelector } from 'react-redux';

//icons
import {FcNumericalSorting12,FcCellPhone,FcCalendar,FcOk,FcAssistant} from 'react-icons/fc';
import { renderIconWToolTip } from '../../helpers/drawer';

const DrawerHistoric = ({drawer, onClose, name}) => {
  
    const customer = useSelector(state => state.customers);

    const columns = [
      {
        title: renderIconWToolTip(FcNumericalSorting12, "orden"),
        dataIndex: 'key',
        align: 'center',
        render: key => <p>{key}</p>
        
      },
      {
          title: renderIconWToolTip(FcCellPhone, 'Pin'),
          dataIndex: 'Pin',
          align: 'center',
          render: pin => <p>{pin}</p>,
      },
        {
          title:renderIconWToolTip(FcCalendar, 'Pin'),
          dataIndex: 'Fecha',
          align: 'center',
          render: fecha => <p>{fecha}</p>,
        }, 
        {
          title: renderIconWToolTip(FcOk, 'Status Mensaje'),
          dataIndex: 'Estado',
          align: 'center',
          render: state=>  <Tag color={(state > 0) ? 'green' : 'volcano'} key={`${state}`}>{state === '0' ? "Pendiente" : "Entregado"}</Tag>
        },
        {
            title: renderIconWToolTip(FcAssistant, '¿Quien mando el mensaje?'),
            dataIndex: 'Usuario',
            align: 'center',
            render: usuario => <p>{(usuario === null) ? "Skytel.com" : usuario}</p>,
          },
        ]
    return (
        <Drawer
        title={`Historial de mensajes de: ${name}`}
        placement={'left'}
        closable={true}
        onClose={onClose}
        visible={drawer.visible}
        key={drawer.placement}
        width={"800"}
      >
        <Table columns={columns} dataSource={customer.userHistoric}  expandable={{
      rowExpandable: record => record.Pin !== null,
      expandedRowRender: record => <p style={{ margin: 0, width: 200 }}>Mensaje: {record.Mensaje}</p>,
    }}/>
      </Drawer>
    )
}

export default DrawerHistoric




