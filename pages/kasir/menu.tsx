import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import MenuMakanan from '../../utils/models/menu'
import { MenuService } from '../../utils/services/MenuService'
import MenuList from '../../components/menu/MenuList'
import KeranjangList from '../../components/menu/KeranjangList'
import Keranjang from '../../utils/models/keranjang'
import Container from '../../components/wrapper/Container'
import { connect } from 'react-redux'
import { addToCart } from '../../utils/reduxes/ActionCreator'
import { AppState } from '../../utils/reduxes/store'

export function MenuKasir({ keranjang, addToCart }) {

    const [menuData, setMenuData] = useState(Array<MenuMakanan>())
    const { getMenu } = MenuService()

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
                    <MenuList menuData={menuData} onAddItem={(item: MenuMakanan) => { addToCart(item) }} />
                </Col>
                <Col span={6}>
                    <Typography.Title level={3}>Keranjang</Typography.Title>
                    <KeranjangList listKeranjang={keranjang} />
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps(state: AppState) {
    return { keranjang: state.keranjang }
}

export default connect(mapStateToProps, { addToCart })(MenuKasir)
