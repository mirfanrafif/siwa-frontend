import { Button, Divider, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Keranjang from '../../utils/models/keranjang'
import KeranjangItem from './KeranjangItem'
import styles from '../../styles/Main.module.css'

export default function KeranjangList({ listKeranjang }: { listKeranjang: Keranjang[] }) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        var totalTemp: number = 0
        listKeranjang.forEach((value) => {
            totalTemp += (value.menu.harga * value.jumlah)
        })
        setTotal(totalTemp)
    }, [listKeranjang, setTotal])

    return (
        <div>
            {listKeranjang.map((item) => {
                return (
                    <KeranjangItem key={item.menu.id} keranjang={item} />
                )
            })}
            <Divider />
            <div className={styles.totalflex}>
                <div style={{ flex: 1 }} >Total</div>
                <Typography.Title level={3} style={{ flex: 1, textAlign: 'right' }}>Rp. {total}</Typography.Title>
            </div>
            <Button type="primary" block>Selesai</Button>
        </div>
    )
}
