import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import MenuMakanan from '../../utils/models/menu'
import { MenuService } from '../../utils/services/MenuService'
import MenuList from '../../components/menu/MenuList'
import KeranjangList from '../../components/menu/KeranjangList'
import Keranjang from '../../utils/models/keranjang'
import Container from '../../components/Container'

export default function MenuKasir() {

    const [listKeranjang, setListKeranjang] = useState(Array<Keranjang>())
    const [menuData, setMenuData] = useState(Array<MenuMakanan>())
    const { getMenu } = MenuService()

    const addItemToKeranjang = (item: MenuMakanan) => {
        const menuIndex = findIndexMenuInKeranjang(item)
        setListKeranjang( () => {
            if (menuIndex != -1) {
                    const newListKeranjang = listKeranjang
                    newListKeranjang[menuIndex].jumlah++
                    console.log(newListKeranjang)
                    return newListKeranjang
                } else {
                    const keranjangItem: Keranjang = {
                        menu: item,
                        jumlah: 1
                    }
                    return [...listKeranjang, keranjangItem]
                }
        } )
    }

    const findIndexMenuInKeranjang = (item: MenuMakanan) => {
        var index = -1
        listKeranjang.forEach((element, key) => {
            if (element.menu.id == item.id) index = key
        });
        return index
    }

    useEffect(() => {
        getMenu().then((data) => {
            setMenuData(data)
        })
    }, [getMenu])

    return (
        <Container>
            <Row gutter={20}>
                <Col span={18}>
                    <Typography.Title level={3}>Menu Makanan</Typography.Title>
                    <MenuList menuData={menuData} onAddItem={addItemToKeranjang} />
                </Col>
                <Col span={6}>
                    <Typography.Title level={3}>Keranjang</Typography.Title>
                    <KeranjangList listKeranjang={listKeranjang} />
                </Col>
            </Row>
        </Container>
    )
}
