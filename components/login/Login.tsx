import { Button, Col, Form, Input, Row, Typography } from 'antd'
import router from 'next/router'
import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../reduxes/ActionCreator'
import Container from '../wrapper/Container'

function LoginComponent({ login }) {
    const onFinish = (values: any) => {
        const authData = {
            ...values,
            role: 'admin'
        }
        login(authData)
    }

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

export default connect(state => state, { login })(LoginComponent)


