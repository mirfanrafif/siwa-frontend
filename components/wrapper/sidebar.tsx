import { Layout, Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { UnorderedListOutlined, TransactionOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useSelector } from "react-redux";

const { Title } = Typography;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1")
  const userData = useSelector(state => state.auth.user)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const renderMenu = () => {
    if (userData && userData.role == "admin") {
      return (
        <Menu theme="dark" mode="inline" selectedKeys={[selectedMenu]}>
          <Menu.Item key="1" icon={<UnorderedListOutlined />} onClick={() => { setSelectedMenu("1") }}>
            <Link href="/admin/menu">Menu</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TransactionOutlined />} onClick={() => { setSelectedMenu("2") }}>
            <Link href="/admin/transaksi">Transaksi</Link>
          </Menu.Item>
        </Menu>
      )
    } else if (userData && userData.role == "kasir") {
      return (
        <Menu theme="dark" mode="inline" selectedKeys={[selectedMenu]}>
          <Menu.Item key="1" icon={<UnorderedListOutlined />} onClick={() => { setSelectedMenu("1") }}>
            <Link href="/kasir/menu">Menu</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TransactionOutlined />} onClick={() => { setSelectedMenu("2") }}>
            <Link href="/kasir/transaksi">Transaksi</Link>
          </Menu.Item>
        </Menu>
      )
    }
  }

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
      {renderMenu()}
    </Layout.Sider>
  );
}
