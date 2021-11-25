import { Form, Input, Select, Upload, Typography, Divider, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { MenuService } from '../../utils/services/MenuService'
import Container from '../wrapper/Container'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import router from 'next/router'
import MenuMakanan from '../../utils/models/menu'
const { Option } = Select;

export default function FormMenu() {
    const { addMenu, detailMenu, updateMenu } = MenuService()
    const [menuId, setMenuId] = useState(0)
    const [menu, setMenu] = useState({} as MenuMakanan)
    const onFinish = (values: any) => {
        if (menuId > 0) {
            updateMenu(menuId, values).then(res => {
                router.back()
            })
        } else {
            addMenu(values).then(res => {
                router.back()
            })
        }

    }

    useEffect(() => {
        const path = router.asPath
        const id = Number.parseInt(path.split('/').pop())
        console.log(id)
        setMenuId(id)
        if (menuId !== 0) {
            detailMenu(menuId).then(res => {
                console.log(res)
                setMenu(res)
            })
        }
    }, [detailMenu, menuId])

    // const uploadFileProps = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //         authorization: 'authorization-text',
    //     },
    //     onChange(info: UploadChangeParam<UploadFile<any>>) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // }

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
                    <Input />
                </Form.Item>

                <Form.Item label="Gambar" name="url_gambar" >
                    <Input defaultValue={menu.url_gambar} />
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
