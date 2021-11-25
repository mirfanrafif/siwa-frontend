import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Layout, Menu, Spin } from "antd";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import { logout, setLoading } from "../../utils/reduxes/ActionCreator";
import { AppState } from "../../utils/reduxes/store";
import router from "next/router";

const LayoutWrapper = ({ auth, children, logout }) => {

  useEffect(() => {
    const publicPaths = ['/login'];
    const path = router.asPath.split('?')[0];
    if (!auth.isLoggedIn && !publicPaths.includes(path)) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    }
  }, [auth.isLoggedIn])

  const onClickLogout = () => {
    logout()
    router.push('/login')
  }

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
                  <Menu.Item key="1" onClick={() => { router.push('/login') }
                  } >Login</Menu.Item>
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