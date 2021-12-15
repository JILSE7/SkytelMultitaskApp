import { useState } from 'react';
//components
import { Layout, Menu } from 'antd';

//Icons
import {DesktopOutlined,ImportOutlined,MailOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons';
import {FcAssistant} from 'react-icons/fc';
//Logos
import logo from '../../assets/cloud2.png';
import logoHeader from '../../assets/cloud.png';
import user from '../../assets/use1.jpg';
import { useNavigate } from 'react-router';
import useUser from '../../Hooks/useUser';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutComponent = ({children}) => {

    const navigate = useNavigate();

    const {username, rol, email} = useUser();
    

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => setCollapsed(!collapsed);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={80}>
          
            <img src={logo}/>
          
          <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
            <Menu.Item key="5" icon={<MailOutlined />} onClick={() => navigate('/mensajes')}>
              Enviar Mensaje
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />} onClick={() => navigate('/clientes')}>
              Clientes
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
              <Menu.Item key="1">Mi Perfil</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<ImportOutlined />}>
              Salir
            </Menu.Item>
            
          </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="Layout_Header flex justify-between items-center" style={{ padding: 0 }} >
            <h1>Bienvenido @<span>{username}</span></h1>
            <img className="logo" src={user} />
            
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>&copy;Skytel</Footer>
        </Layout>
      </Layout>
    );
  
}
export default LayoutComponent;