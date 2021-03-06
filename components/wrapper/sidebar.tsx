import { Layout, Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { UnorderedListOutlined, TransactionOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AppState } from "../../utils/reduxes/store";
import SubMenu from "antd/lib/menu/SubMenu";

const { Title } = Typography;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("3")
  const userData = useSelector((state: AppState) => state.auth.user)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return (
    <Layout.Sider
      style={{}}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      theme="dark"
    >
      {collapsed ? null : (
        <div style={{ padding: 20 }}>
          <Title level={1} style={{ color: "white" }}>
            SIWA
          </Title>
          <Title level={5} style={{ color: "white" }}>
            Sistem Informasi Warung
          </Title>
        </div>
      )}
      <Menu theme="dark" mode="inline" selectedKeys={[selectedMenu]} >
        {userData.level == 1 && (
          <SubMenu title="Admin">
            <Menu.Item key="1" icon={<UnorderedListOutlined />} onClick={() => { setSelectedMenu("1") }}>
              <Link href="/admin/menu">Menu</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TransactionOutlined />} onClick={() => { setSelectedMenu("2") }}>
              <Link href="/admin/transaksi">Transaksi</Link>
            </Menu.Item>
          </SubMenu>
        )}
        <SubMenu title="Kasir">
          <Menu.Item key="3" icon={<UnorderedListOutlined />} onClick={() => { setSelectedMenu("3") }}>
            <Link href="/kasir/menu">Menu</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
}
