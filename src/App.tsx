import { Layout, theme, Menu, Button, Col, Row, Space } from "antd";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import page404 from "./pages/404/404";
import { CiUser } from "react-icons/ci";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { IoWalletOutline } from "react-icons/io5";

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
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
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
            <Col span={16}>
              <Menu
                theme="dark"
                className="header-sidebar"
                onClick={onClick}
                mode="horizontal"
                items={items}
              />
            </Col>
            <Col span={8}>
              <Space>
                <Button  ghost icon={<IoWalletOutline />}>
                  Connect Wallet
                </Button>
                <Button ghost icon={<CiUser />}>
                  Log In
                </Button>
                <Button ghost icon={<CiUser />}>
                  Sign Up
                </Button>
              </Space>
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            margin: "2px 0px",
            padding: 24,
            minHeight: 600,
            background: "#001529",
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
