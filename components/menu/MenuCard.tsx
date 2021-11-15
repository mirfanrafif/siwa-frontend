import { Card } from 'antd'
import React from 'react'
import MenuMakanan from '../../utils/models/menu'

const { Meta } = Card

export default function MenuCard({menu}: {menu: MenuMakanan}) {
    return (
        <Card
                hoverable
                cover={<img alt="example" src={menu.url_gambar} style={{height: 100, objectFit: 'cover'}}/>}
            >
                <Meta title={menu.nama} description={menu.harga} />
            </Card>
    )
}
