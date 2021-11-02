import React from "react";
import {Divider, Typography, Form, Input, Button, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons'
import Container from "../../../components/Container";

export default function Tambah() {

  const onFinish = (values: any) => {

  }

  const onFinishFailed = (errorInfo: any) => {

  }

  const uploadFileProps = {

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
            <Button icon={<UploadOutlined/>}>Upload Gambar</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="primary" htmlType="submit"> Simpan </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}
