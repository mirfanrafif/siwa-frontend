import { Col, Row } from 'antd'
import React from 'react'
import KeranjangList from '../../components/keranjang/KeranjangList'
import Pembayaran from '../../components/transaksi/Pembayaran'

export default function KasirTransaksi() {
    return (
        <div>
            <Row gutter={20}>
                <Col span={16}>
                    <KeranjangList />
                </Col>
                <Col span={8}>
                    <Pembayaran />
                </Col>
            </Row>
        </div>
    )
}
