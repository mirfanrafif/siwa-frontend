import { Button, Col, Divider, Input, InputNumber, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { AppState } from '../../utils/reduxes/store'
import { clearCart } from '../../utils/reduxes/cart/CartActions'
import router from 'next/router'
import Container from '../wrapper/Container'

function Pembayaran({ clearCart }) {
    const [bayar, setBayar] = useState(0)
    const [kembalian, setKembalian] = useState(0)
    const keranjang = useSelector((state: AppState) => state.keranjang)

    useEffect(() => {
        setKembalian(bayar - keranjang.total)
    }, [bayar, keranjang.total])

    const prosesBayar = () => {
        if (keranjang.keranjang.length == 0) {

        } else if (kembalian < 0) {

        }
        else {
            clearCart()
            router.push('/kasir/menu')
        }
    }

    const onBayarFieldChange = (value) => {
        if (value <= 0) {
            setBayar(0)
        } else {
            setBayar(value)
        }
    }

    return (
        <Container>
            <Row>
                <Col span={16}>
                    <Typography.Title level={5}>Total</Typography.Title>
                </Col>
                <Col span={8}><Typography.Title level={5}>Rp. {keranjang.total}</Typography.Title></Col>
            </Row>
            <Row>
                <Col span={16}>
                    <Typography.Title level={5}>Bayar</Typography.Title>
                </Col>
                <Col span={8}>
                    <InputNumber addonBefore="Rp. " value={bayar} onChange={onBayarFieldChange} />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={16}><Typography.Title level={3}>Kembalian</Typography.Title></Col>
                <Col span={8}><Typography.Title level={5}>Rp. {kembalian}</Typography.Title></Col>
            </Row>
            <Button block type="primary" onClick={prosesBayar}>Selesai</Button>
        </Container>
    )
}

const mapStateToProps = (state: AppState) => { return state }

export default connect(mapStateToProps, { clearCart })(Pembayaran)