import { Form, Input, Select, Upload, Typography, Divider, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React from 'react'
import Container from '../wrapper/Container'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
const { Option } = Select;

export default function FormMenu({}) {

    const onFinish = (values: any) => {
        
    }

    const onFinishFailed = (errorInfo: any) => {

    }

    const uploadFileProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info: UploadChangeParam<UploadFile<any>>) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    }

    return (
        <Container>
            <Typography.Title level={3}>Tambah Menu Makanan</Typography.Title>
            <Divider />
            <Form name="tambah-menu"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item label="Nama Makanan" name="nama" rules={[{
                    required: true, message: 'Nama makanan harus diisi'
                }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Harga Makanan per porsi" name="harga" rules={[{
                    required: true, message: 'Harga makanan harus diisi'
                }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Gambar" name="gambar">
                    <Upload {...uploadFileProps}>
                        <Button icon={<UploadOutlined />}>Upload Gambar</Button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Jenis Menu" name="jenis">
                    <Select defaultValue="makanan">
                        <Option value="makanan">Makanan</Option>
                        <Option value="minuman">Minuman</Option>
                        <Option value="tambahan">Tambahan</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit"> Simpan </Button>
                </Form.Item>
            </Form>
        </Container>
    )
}
