import { Button, Col, Form, Input, Row, Typography } from 'antd'
import router from 'next/router'
import React from 'react'
import Container from '../wrapper/Container'

export default function LoginComponent() {

    const onFinish = (values: any) => {
        console.log(values)
        localStorage.setItem("user_data", JSON.stringify(values))
        router.push('/admin/menu')
    }

    const onFinishFailed = () => {

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
                            onFinishFailed={onFinishFailed}
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
