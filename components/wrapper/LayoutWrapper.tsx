import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Layout, Menu, Spin } from "antd";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import { logout, setLoading } from "../../utils/reduxes/ActionCreator";
import { AppState } from "../../utils/reduxes/store";
import router from "next/router";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";

const LayoutWrapper = ({ auth, loading, setLoading, children, logout }) => {

  const publicPaths = ['/login'];

  useEffect(() => {
    setLoading(true)
    authCheck(router.asPath)
    // set authorized to false to hide page content while changing routes
    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck)
    return () => {
      router.events.off('routeChangeComplete', authCheck);
      setLoading(false)
    }
  }, [])

  const authCheck = (url) => {
    const path = url.split('?')[0];
    if (!auth.isLoggedIn && !publicPaths.includes(path)) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    }
  }

  const onClickLogout = () => {
    logout()
    router.push('/login')
  }

  const onClickLogin = () => {
    router.push('/login')
  }

  const loadingSpin = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      {console.log(auth.isLoggedIn)}
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
                  <Menu.Item key="1" onClick={onClickLogin} >Login</Menu.Item>
                )}
              </Menu>
            </Layout.Header>
            <Layout.Content>
              <div
                className="site-layout-background"
                style={{ minHeight: "100vh", padding: 24 }}>
                {children}
              </div>
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default connect((state: AppState) => state, { logout, setLoading })(LayoutWrapper)