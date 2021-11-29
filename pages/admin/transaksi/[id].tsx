import { Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Container from '../../../components/wrapper/Container'
import { TransaksiDetailItem } from '../../../utils/models/Transaksi'
import TransaksiService from '../../../utils/services/TransaksiService'

export default function TransaksiDetail({ transaksi }: { transaksi: TransaksiDetailItem }) {

    const [listMenu, setListMenu] = useState([])
    const [total, setTotal] = useState(0)

    const columns = [
        {
            title: "No. ",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Nama Menu",
            dataIndex: "nama",
            key: "nama",
        },
        {
            title: "Jumlah",
            dataIndex: "jumlah",
            key: "jumlah",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
    ]

    useEffect(() => {
        const menu = transaksi.details.map((detail) => {
            setTotal(total => total + (detail.jumlah * detail.menu.harga))
            return {
                id: detail.id,
                nama: detail.menu.nama,
                jumlah: detail.jumlah,
                total: detail.menu.harga * detail.jumlah
            }
        })
        setListMenu(menu)
    }, [])
    return (
        <div>
            <Container>
                <Typography.Title level={1}>{transaksi.id}</Typography.Title>
                <table>
                    <tr>
                        <td>Nama Kasir</td>
                        <td>{transaksi.kasir.nama}</td>
                    </tr>
                    <tr>
                        <td style={{ paddingRight: '15px' }}>Tanggal Transaksi</td>
                        <td>{new Date(transaksi.createdAt).toUTCString()}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </table>
            </Container>

            <Table columns={columns} dataSource={listMenu} rowKey="id" />
        </div>
    )
}

export async function getStaticPaths() {
    const listTransaksi = await TransaksiService().getTransaksi()
    const paths = listTransaksi.map((transaksi) => ({
        params: { id: transaksi.id.toString() }
    }))

    console.log(paths)

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const transaksi = await TransaksiService().findTransaksi(params.id)
    return { props: { transaksi } }
}