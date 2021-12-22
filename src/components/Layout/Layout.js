import { useState } from 'react';
//components
import { Layout, Menu } from 'antd';

//Icons
import {ImportOutlined,MailOutlined,
        TeamOutlined,UserOutlined,
        AreaChartOutlined, SettingOutlined,
        RocketOutlined
      } from '@ant-design/icons';

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
    

    const [collapsed, setCollapsed] = useState(true);
    const onCollapse = () => setCollapsed(!collapsed);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={80}>
          
            <img src={logo} alt='skytel'/>
          
          <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
            <Menu.Item key="5" icon={<MailOutlined />} onClick={() => navigate('/mensajes')}>
              Enviar Mensaje
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />} onClick={() => navigate('/clientes')}>
              Clientes
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
              <Menu.Item key="1" icon={<RocketOutlined />} onClick={() => navigate('/perfil')}>Mi Perfil</Menu.Item>
              <Menu.Item key="2" icon={<AreaChartOutlined />} onClick={() => navigate('/estadisticas')}>Mis Estadisticas</Menu.Item>
              {

               rol === "admin" && <Menu.Item key="3" onClick={() => navigate('/gestion')} icon={<SettingOutlined />} >Multitask</Menu.Item>
              }
            </SubMenu>
            <Menu.Item key="6" icon={<ImportOutlined />}>
              Salir
            </Menu.Item>
            
          </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="Layout_Header flex justify-between items-center" style={{ padding: 0 }} >
            <div className='flex'>
              <p>{username}</p>
              <img className="logo" src={user} alt='userImage'/>
            </div>
            <h1>Bienvenido</h1>
            <img className="logoCloud" src={logoHeader} alt='skytelCloud'/>
            
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