import { Row, Col } from 'antd'
import React from 'react'
import styles from '../../styles/Main.module.css'
import Keranjang from '../../utils/models/keranjang'

export default function KeranjangItem({keranjang}: {keranjang: Keranjang}) {
    return (
        <div className={styles.container}>
            <Row>
                <Col span={6}>img</Col>
                <Col span={12}>
                    {keranjang.menu.nama}
                </Col>
                <Col span={6}>
                    {keranjang.jumlah}
                </Col>
            </Row>
        </div>
    )
}
