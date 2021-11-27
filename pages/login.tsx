import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd'
import router from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Container from '../components/wrapper/Container'
import User from '../utils/models/User'
import { login } from '../utils/reduxes/auth/AuthActions'
import { AppState } from '../utils/reduxes/store'

function Login({ isLoggedIn, user, login }: { isLoggedIn: boolean, user: User, login: (loginDetails: any) => (dispatch: any) => void }) {
    const onFinish = (values: any) => {
        const authData = {
            ...values,
            role: 'admin'
        }
        login(authData)
        if (authData.role == 'admin') {
            router.push('/admin/menu')
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            switch (user.role) {
                case 'admin':
                    router.push('/admin/menu')
                    break;
                case 'kasir':
                    router.push('/kasir/menu')
                    break;
                default:
            }
        }
    }, [isLoggedIn, user])

    return (
        <div>
            <Row>
                <Col span={6} offset={9}>
                    <Container>
                        <Typography.Title level={3} style={{ textAlign: 'center' }}>Login</Typography.Title>
                        <Divider />
                        <Form name="tambah-menu"
                            layout="vertical"
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

                            <Form.Item>
                                <Button type="primary" htmlType="submit"> Login </Button>
                            </Form.Item>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default connect((state: AppState) => state.auth, { login })(Login)