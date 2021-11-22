import { Button, Col, Form, Input, Row, Typography } from 'antd'
import router from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Container from '../components/wrapper/Container'
import { login } from '../reduxes/ActionCreator'
import { AppState } from '../reduxes/store'

function Login({ auth, login }) {
    const onFinish = (values: any) => {
        const authData = {
            ...values,
            role: 'admin'
        }
        login(authData)
        router.push('/admin/menu')
    }

    useEffect(() => {
        if (auth.isLoggedIn) {
            switch (auth.user.role) {
                case 'admin':
                    router.push('/admin/menu')
                default:

            }
        }
    }, [auth])

    return (
        <div>
            <Row>
                <Col span={6} offset={3}>
                    <Container>
                        <Typography.Title level={3}>Login</Typography.Title>
                        <Form name="tambah-menu"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item label="Username" name="username" rules={[{
                                required: true, message: 'Username harus diisi'
                            }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="password" name="password" rules={[{
                                required: true, message: 'Password harus diisi'
                            }]} >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit"> Simpan </Button>
                            </Form.Item>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(Login)