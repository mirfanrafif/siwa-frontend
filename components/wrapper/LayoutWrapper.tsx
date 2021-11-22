import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Layout, Menu } from "antd";
import Sidebar from "./sidebar";
import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "../../reduxes/ActionCreator";
import { AppState } from "../../reduxes/store";
import router from "next/router";

const LayoutWrapper = ({ isLoggedIn, children, logout }) => {

  const [authorized, setAuthorized] = useState(false)
  const authCheck = (url) => {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];
    if (!isLoggedIn && !publicPaths.includes(path)) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true)
    }
  }
  useEffect(() => {
    authCheck(router.asPath)
    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);
    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck)
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, [])

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
                {authorized ? (
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

export default connect((state: AppState) => state.auth, { logout })(LayoutWrapper)