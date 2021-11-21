import { Row, Col } from 'antd'
import React from 'react'
import styles from '../../styles/Main.module.css'
import Keranjang from '../../utils/models/keranjang'

export default function KeranjangItem({keranjang}: {keranjang: Keranjang}) {
    return (
        <div className={styles.container}>
            <Row>
                <Col span={6}>
                <img alt="example" src={keranjang.menu.url_gambar} style={{height: 40, width: 40, objectFit: 'cover'}}/>
                </Col>
                <Col span={12}>
                    <b>{keranjang.menu.nama}</b>
                    <br /> {keranjang.menu.harga}
                </Col>
                <Col span={6}>
                    {keranjang.jumlah}
                </Col>
            </Row>
        </div>
    )
}
