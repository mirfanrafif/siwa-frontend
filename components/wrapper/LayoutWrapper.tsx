import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Layout, Menu, Spin } from "antd";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import { logout } from "../../utils/reduxes/auth/AuthActions";
import { AppState } from "../../utils/reduxes/store";
import router from "next/router";
import { AuthState } from "../../utils/reduxes/auth/AuthReducer";

const LayoutWrapper = ({ auth, children, logout }) => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hideContent = () => setVisible(false);

    const authCheck = () => {
      const path = router.asPath.split('?')[0];
      const publicPaths = ['/login'];
      if (!auth.isLoggedIn && !publicPaths.includes(path)) {
        router.push({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        });
      } else {
        setVisible(true)
      }
    }

    authCheck();
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, [auth.isLoggedIn])

  const onClickLogout = () => {
    logout()
    setVisible(false)
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
        {
          auth.isLoggedIn && (
            <Sidebar />
          )
        }
        <Layout.Content>
          <Layout>
            <Layout.Header
              style={{ padding: 0 }}
            >
              <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
                {auth.isLoggedIn ? (
                  <Menu.Item key="1" onClick={onClickLogout}>Logout</Menu.Item>
                ) : (
                  <Menu.Item key="1" onClick={() => { router.push('/login') }
                  } >Login</Menu.Item>
                )}
              </Menu>
            </Layout.Header>
            <Layout.Content>
              <div
                className="site-layout-background"
                style={{ minHeight: "100vh", padding: 24 }}>
                {visible && (children)}
              </div>
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default connect((state: AppState) => state, { logout })(LayoutWrapper)