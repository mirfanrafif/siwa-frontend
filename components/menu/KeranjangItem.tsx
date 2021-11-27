import { Row, Col, Input, InputNumber, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/Main.module.css'
import Keranjang from '../../utils/models/keranjang'
import { DeleteOutlined } from '@ant-design/icons'
import { setCart, deleteCart } from '../../utils/reduxes/cart/CartActions'

function KeranjangItem({ keranjang, setCart, deleteCart }: { keranjang: Keranjang }) {

    const onKeranjangJumlahChange = (value: number) => {
        if (value < 1) {
        } else {
            const newKeranjang: Keranjang = { ...keranjang, jumlah: value }
            setCart(newKeranjang)
        }
    }

    function onDeleteKeranjangItemClick() {
        deleteCart(keranjang)
    }

    return (
        <div className={styles.container}>
            <Row>
                <Col span={6}>
                    <img alt="example" src={keranjang.menu.url_gambar} style={{ height: 64, width: 64, objectFit: 'cover' }} />
                </Col>
                <Col span={11}>
                    <b>{keranjang.menu.nama}</b>
                    <br /> {keranjang.menu.harga}
                </Col>
                <Col span={6}>
                    <InputNumber value={keranjang.jumlah} onChange={onKeranjangJumlahChange} />
                </Col>
                <Col span={1}>
                    <Button onClick={onDeleteKeranjangItemClick}><DeleteOutlined /></Button>
                </Col>
            </Row>
        </div>
    )
}

export default connect(null, { setCart, deleteCart })(KeranjangItem)