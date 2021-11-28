import { Button, Col, Divider, Input, InputNumber, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { AppState } from '../../utils/reduxes/store'
import { clearCart } from '../../utils/reduxes/cart/CartActions'
import router from 'next/router'
import Container from '../wrapper/Container'
import Swal from 'sweetalert2'
import { KeranjangState } from '../../utils/reduxes/cart/KeranjangReducer'
import TransaksiService from '../../utils/services/TransaksiService'

type MenuTransaksi = {
    id: number,
    jumlah: number
}

type AddTransaksi = {
    userid: number,
    menu: MenuTransaksi[]
}

function Pembayaran({ keranjang, user, clearCart }: { keranjang: KeranjangState }) {
    const [bayar, setBayar] = useState(0)
    const [kembalian, setKembalian] = useState(0)

    useEffect(() => {
        setKembalian(bayar - keranjang.total)
    }, [bayar, keranjang.total])

    const prosesBayar = () => {
        if (keranjang.keranjang.length == 0) {
            Swal.fire({ title: 'Gagal', text: 'Keranjang kosong', icon: 'error' })
        } else if (kembalian < 0) {
            Swal.fire({ title: 'Gagal', text: 'Uang bayar kurang', icon: 'error' })
        }
        else {
            const transaksi: AddTransaksi = {
                userid: user.id,
                menu: keranjang.keranjang.map((keranjangItem) =>
                    ({ id: keranjangItem.menu.id, jumlah: keranjangItem.jumlah })
                )
            }

            console.log(transaksi)
            TransaksiService().addTransaksi(transaksi).then(res => {
                clearCart()
                Swal.fire({
                    title: 'Transaksi berhasil',
                    text: 'Transaksi berhasil dilakukan',
                    icon: 'success'
                })
                router.push('/kasir/menu')
            }, err => {
                Swal.fire({
                    title: 'Transaksi gagal',
                    text: 'Transaksi gagal : ' + err,
                    icon: 'error'
                })
            })


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
                <Col span={8}>
                    <Typography.Title level={5}>Rp. {keranjang.total}</Typography.Title>
                </Col>
                <Col span={16}>
                    <Typography.Title level={5}>Bayar</Typography.Title>
                </Col>
                <Col span={8}>
                    <InputNumber addonBefore="Rp. " value={bayar} onChange={onBayarFieldChange} />
                </Col>
                <Col span={16}>
                    <Typography.Title level={3}>Kembalian</Typography.Title>
                </Col>
                <Col span={8}>
                    <Typography.Title level={5}>Rp. {kembalian}</Typography.Title>
                </Col>
            </Row>
            <Divider />
            <Button block type="primary" onClick={prosesBayar}>Selesai</Button>
        </Container>
    )
}

const mapStateToProps = (state: AppState) => ({ keranjang: state.keranjang, user: state.auth.user })

export default connect(mapStateToProps, { clearCart })(Pembayaran)