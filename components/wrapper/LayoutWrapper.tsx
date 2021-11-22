import React, { useEffect } from "react";
import Head from "next/head";
import { Layout, Menu } from "antd";
import Sidebar from "./sidebar";
import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "../../reduxes/ActionCreator";
import router from "next/router";

const LayoutWrapper = ({ isLoggedIn, user, children, logout }) => {

  const dispatch = useDispatch()

  const onClickLogout = () => {
    logout()
    router.push('/login')
  }

  const onClickLogin = () => {
    router.push('/login')
  }

  return (
    <>
      <Head>
        <title>SIWA - Sistem Informasi Warung</title>
        <meta name="description" content="Sistem Informasi Warung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Sidebar />
        <Layout.Content>
          <Layout>
            <Layout.Header
              style={{ padding: 0 }}
            >
              <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
                {isLoggedIn ? (
                  <Menu.Item key="1" onClick={onClickLogout}>Logout</Menu.Item>
                ) : (
                  <Menu.Item key="2" onClick={onClickLogin} >Login</Menu.Item>
                )}
              </Menu>
            </Layout.Header>
            <Layout.Content>
              <div className="site-layout-background" style={{ minHeight: "100vh", padding: 24 }}>{children}</div>
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    </>
  );
}

// LayoutWrapper = wrapper.withRedux(initStore, (state) => ({ user: state.auth.user }))(LayoutWrapper)

export default connect(state => state.auth, { logout })(LayoutWrapper)