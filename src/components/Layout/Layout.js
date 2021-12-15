import { useState } from 'react';
//components
import { Layout, Menu } from 'antd';

//Icons
import {DesktopOutlined,PieChartOutlined,FileOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons';
import {FcAssistant} from 'react-icons/fc';
//Logos
import logo from '../../assets/skytel2.png';
import logoHeader from '../../assets/cloud.png';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutComponent = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => setCollapsed(!collapsed);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={50}>
          <div className="logo" ><img src={logo}/></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined/>}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background Layout_Header flex justify-between items-center" style={{ padding: 0 }} >
            <img src={logoHeader} />
            <h1>Bienvenido <span>usuario</span></h1>
            <FcAssistant/>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  
}
export default LayoutComponent;