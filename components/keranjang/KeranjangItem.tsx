import { Row, Col, Input, InputNumber, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/Main.module.css'
import Keranjang from '../../utils/models/keranjang'
import { DeleteOutlined } from '@ant-design/icons'
import { setCart, deleteCart } from '../../utils/reduxes/cart/CartActions'
import Container from '../wrapper/Container'

function KeranjangItem({ keranjang, setCart, deleteCart }) {

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
        <div style={{
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'row'
        }}>

            <div style={{ flex: 1 }}>
                <img
                    alt="example"
                    src={keranjang.menu.url_gambar}
                    style={{ height: 64, width: 64, objectFit: 'cover' }}
                />
            </div>

            <div style={{ flex: 2 }}>
                <b>{keranjang.menu.nama}</b>
                <br /> {keranjang.menu.harga}
            </div>

            <div style={{ flex: 1 }}>
                <InputNumber value={keranjang.jumlah} onChange={onKeranjangJumlahChange} />
            </div>

            <div style={{ flex: 1 }}>
                <Button onClick={onDeleteKeranjangItemClick}><DeleteOutlined /></Button>
            </div>

            <div style={{ flex: 1 }}>
                <b>Rp. {keranjang.menu.harga * keranjang.jumlah}</b>
            </div>
        </div>
    )
}

export default connect(null, { setCart, deleteCart })(KeranjangItem)