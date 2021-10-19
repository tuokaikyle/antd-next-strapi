import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuOutlined,
  SettingOutlined,
  MobileOutlined,
  HeartOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { useState } from 'react';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  url: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

const UniversalLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header className='header' style={{ padding: 0 }}>
          <div className='headerLeft'>
            <MenuOutlined
              className='menuIcon'
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              style={
                // collapsed ? { paddingInline: '32px' } : { paddingInline: '24px' }
                { fontSize: '18px' }
              }
            />
            <div className='logo'></div>
          </div>

          <Menu mode='horizontal' className='dropdown'>
            <SubMenu key='SubMenu' icon={<SettingOutlined />} title='Profile'>
              <Menu.ItemGroup title='Item 1'>
                <Menu.Item key='setting:1'>Setting 1</Menu.Item>
                <Menu.Item key='setting:2'>Setting 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.Item key='setting:3'>Setting 3</Menu.Item>
              <Menu.Item key='setting:4'>Setting 4</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>

        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            // onCollapse={setCollapsed}
            className='site-layout-background'
            theme='light'
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key='1' icon={<UserOutlined />}>
                <Link href='/#'>
                  <a>Antd</a>
                </Link>
              </Menu.Item>

              <Menu.Item key='2' icon={<LaptopOutlined />}>
                <Link href='/city'>
                  <a>City</a>
                </Link>
              </Menu.Item>
              <SubMenu key='sub3' icon={<NotificationOutlined />} title='Post'>
                <Menu.Item key='9'>
                  <Link href='/post/csr'>
                    <a>csr</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='11'>option11</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
              <Menu.Item key='4' icon={<HeartOutlined />}>
                <Link href='/people'>
                  <a>People</a>
                </Link>
              </Menu.Item>
              <Menu.Item key='5' icon={<MobileOutlined />}>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
};

export default UniversalLayout;
