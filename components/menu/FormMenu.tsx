import { Form, Input, Select, Upload, Typography, Divider, message, Button, InputNumber } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { MenuService } from '../../utils/services/MenuService'
import Container from '../wrapper/Container'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import router from 'next/router'
import MenuMakanan from '../../utils/models/menu'
const { Option } = Select;

export default function FormMenu({ menu }: { menu: MenuMakanan }) {
    const { addMenu, updateMenu } = MenuService()

    const onFinish = (values: any) => {
        if (menu.id > 0) {
            updateMenu(menu.id, values).then(res => {
                router.back()
            })
        } else {
            addMenu(values).then(res => {
                router.back()
            })
        }

    }

    return (
        <Container>
            <Typography.Title level={3}>Tambah Menu Makanan</Typography.Title>
            <Divider />
            <Form name="tambah-menu"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={menu}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item label="Nama Makanan" name="nama" rules={[{
                    required: true, message: 'Nama makanan harus diisi'
                }]} >
                    <Input />
                </Form.Item>

                <Form.Item label="Harga Makanan per porsi" name="harga" rules={[{
                    required: true, message: 'Harga makanan harus diisi'
                }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item label="Gambar" name="url_gambar" >
                    <Input />
                </Form.Item>

                <Form.Item label="Jenis Menu" name="jenis_menu">
                    <Select>
                        <Option value="makanan">Makanan</Option>
                        <Option value="minuman">Minuman</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit"> Simpan </Button>
                </Form.Item>
            </Form>
        </Container>
    )
}
