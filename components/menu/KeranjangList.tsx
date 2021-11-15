import React from 'react'
import Keranjang from '../../utils/models/keranjang'
import KeranjangItem from './KeranjangItem'

export default function KeranjangList({ listKeranjang }: { listKeranjang: Keranjang[] }) {
    return (
        <div>
            {
                listKeranjang.map((item) => {
                    return (
                        <KeranjangItem key={item.menu.id} keranjang={item} />
                    )
                })
            }
        </div>
    )
}
