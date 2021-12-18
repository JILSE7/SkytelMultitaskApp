
import { Drawer,Table, Tag } from 'antd';
import { useSelector } from 'react-redux';

const DrawerHistoric = ({drawer, onClose}) => {
  
    const customer = useSelector(state => state.customers);

    const columns = [
      {
        title: '#',
        dataIndex: 'key',
        align: 'center',
        render: key => <p>{key}</p>
        
      },
      {
          title: 'Pin',
          dataIndex: 'Pin',
          align: 'center',
          render: pin => <p>{pin}</p>,
      },
        {
          title: 'Fecha',
          dataIndex: 'Fecha',
          align: 'center',
          render: fecha => <p>{fecha}</p>,
        }, 
        {
          title: 'Estado',
          dataIndex: 'Estado',
          align: 'center',
          render: state=>  <Tag color={(state > 0) ? 'green' : 'volcano'} key={`${state}`}>{state === '0' ? "Pendiente" : "Entregado"}</Tag>
        },
        {
            title: 'Usuario',
            dataIndex: 'Usuario',
            align: 'center',
            render: usuario => <p>{(usuario === null) ? "Enviado desde plataforma" : usuario}</p>,
          },
        ]
    return (
        <Drawer
        title="Basic Drawer"
        placement={'bottom'}
        closable={true}
        onClose={onClose}
        visible={drawer.visible}
        key={drawer.placement}
      >
        <Table columns={columns} dataSource={customer.userHistoric}  expandable={{
      rowExpandable: record => record.Pin !== null,
      expandedRowRender: record => <p style={{ margin: 0, width: 200 }}>Mensaje: {record.Mensaje}</p>,
    }}/>
      </Drawer>
    )
}

export default DrawerHistoric




