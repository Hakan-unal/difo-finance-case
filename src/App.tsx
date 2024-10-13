import { Layout, theme, Menu, Col, Row, Space, Button } from "antd";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import page404 from "./pages/404/404";
import {IoWalletOutline} from "react-icons/io5"
import { CiUser } from "react-icons/ci";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Content, Header } = Layout;
type MenuItem = Required<MenuProps>["items"][number];


const items: MenuItem[] = [
  {
    key: "sub1",
    icon: <MailOutlined />,
    label: "Navigation One",
    children: [
      {
        key: "1-1",
        label: "Item 1",
        type: "group",
        children: [
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ],
      },
      {
        key: "1-2",
        label: "Item 2",
        type: "group",
        children: [
          { key: "3", label: "Option 3" },
          { key: "4", label: "Option 4" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    icon: <AppstoreOutlined />,
    label: "Navigation Two",
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
  },
];

const App: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Layout>
        <Header>
          <Row>
            <Col span={8} sm={12} md={16}>
              <Menu
                expandIcon={<CiUser />}
                theme="dark"
                className="header-sidebar"
                onClick={onClick}
                mode="horizontal"
                items={items}
              />
            </Col>
            <Col span={16} sm={12} md={8}>
               <Space >
                <Button  className="header-button" ghost icon={<IoWalletOutline size={16} />}>
                  Connect Wallet
                </Button>
                <Button  className="header-button"  ghost icon={<CiUser size={16} />}>
                  Log In
                </Button>
                <Button  className="header-button"  ghost icon={<CiUser size={16} />}>
                  Sign Up
                </Button>
              </Space> 
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            margin: "0px 0px",
            padding: 24,
            minHeight: 600,
            background: "#000000",
          }}
        >
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="*" Component={page404}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
