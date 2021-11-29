import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import MenuMakanan from '../../utils/models/menu'
import { MenuService } from '../../utils/services/MenuService'
import MenuList from '../../components/menu/MenuList'
import KeranjangList from '../../components/keranjang/KeranjangList'
import Keranjang from '../../utils/models/keranjang'
import Container from '../../components/wrapper/Container'
import { connect } from 'react-redux'
import { addToCart } from '../../utils/reduxes/cart/CartActions'
import { AppState } from '../../utils/reduxes/store'
import router from 'next/router'
import Swal from 'sweetalert2'

export function MenuKasir({ addToCart }) {

    const [menuData, setMenuData] = useState(Array<MenuMakanan>())
    const { getMenu } = MenuService()

    useEffect(() => {
        getMenu().then((data) => {
            setMenuData(data)
        }).catch(err => {
            Swal.fire('Gagal Mengambil menu', 'Gagal mengambil menu : ' + err, 'error')
        })
    }, [])

    return (

        <Row gutter={20}>
            <Col span={16}>
                <MenuList menuData={menuData} onAddItem={(item: MenuMakanan) => { addToCart(item) }} />
            </Col>
            <Col span={8}>
                <Container>
                    <Typography.Title level={3}>Keranjang</Typography.Title>
                </Container>
                <KeranjangList />
                <Container>
                    <Button type="primary" block onClick={() => { router.push('/kasir/transaksi') }}>Pembayaran</Button>
                </Container>

            </Col>
        </Row>
    )
}



export default connect(null, { addToCart })(MenuKasir)
