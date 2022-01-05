import { useState } from 'react';
import { useNavigate } from 'react-router';
//components
import { Layout, Menu } from 'antd';
import Profile from '../../views/Profile';

//Icons
import {ImportOutlined,MailOutlined,
        TeamOutlined,UserOutlined,
        UserAddOutlined, SettingOutlined,
        RocketOutlined
      } from '@ant-design/icons';

import ModalComponent from '../Modal';
import useUser from '../../Hooks/useUser';
import useModal from '../../Hooks/useModal';

//Logos
import logo from '../../assets/cloud2.png';
import logoHeader from '../../assets/cloud.png';
import user from '../../assets/use1.jpg';
import { useDispatch } from 'react-redux';
import { startLogOut } from '../../actions/auth';




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutComponent = ({children}) => {
    //Router
    const navigate = useNavigate();
    //Redux
    const dispatch = useDispatch();

    const {username, rol, imagen} = useUser();
    const {isModalVisible, showModal, handleOk,handleCancel} = useModal();
    console.log(imagen);

    const [collapsed, setCollapsed] = useState(true);
    const onCollapse = () => setCollapsed(!collapsed);



    return (
      <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={80}>

            <img src={logo} alt='skytel' onClick={() => navigate('/')} className='cursor-pointer'/>
          
          <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
            <Menu.Item key="5" icon={<MailOutlined />} onClick={() => navigate('/mensajes')}>
              Enviar Mensaje
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />} onClick={() => navigate('/clientes')}>
              Clientes
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
              <Menu.Item key="1" icon={<RocketOutlined />} onClick={() => showModal()}>Mi Perfil</Menu.Item>
              
              {

               rol === "admin" && 
               <>
               <Menu.Item key="3" onClick={() => navigate('/gestion')} icon={<SettingOutlined />} >Multitask</Menu.Item>
               <Menu.Item key="7" onClick={() => navigate('/registro-empleado')} icon={<UserAddOutlined />} >Registro Usuarios</Menu.Item>
               <Menu.Item key="8" onClick={() => navigate('/registro-cliente')} icon={<UserAddOutlined />} >Registro Clientes</Menu.Item>
               </>
              }
            </SubMenu>
            <Menu.Item key="6" icon={<ImportOutlined />} onClick={() => dispatch(startLogOut())}>
              Salir
            </Menu.Item>
            
          </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="Layout_Header flex justify-around items-center" style={{ padding: 0 }} >
            <h1>!Bienvenido de nuevo!</h1>
            
            <div className='Layout_Header_Profile flex'>
              <p>{username}</p>
              <img className="logo" src={imagen} alt='userImage'/>
            </div>
            
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {children}
          </Content>
          <Footer className=' Footer flex items-center justify-center' style={{ textAlign: 'center' }}>
            
            <img className="logoCloud" src={logoHeader} alt='skytelCloud'/>
            <p>Copyrigth &copy;</p>
          </Footer>
        </Layout>
      </Layout>
      <ModalComponent isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk}>
        <Profile/>
      </ModalComponent>
      </>
    );
  
}
export default LayoutComponent;