import { Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
import { UnorderedListOutlined, TransactionOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title } = Typography;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout.Sider
      style={{}}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
          <Link href="/admin/menu">Menu</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TransactionOutlined />}>
          <Link href="/admin/transaksi">Transaksi</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
