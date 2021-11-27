import { Button, Divider, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Keranjang from '../../utils/models/keranjang'
import KeranjangItem from './KeranjangItem'
import styles from '../../styles/Main.module.css'
import { connect } from 'react-redux'
import { AppState } from '../../utils/reduxes/store'
import router from 'next/router'
import { KeranjangState } from '../../utils/reduxes/cart/KeranjangReducer'
import Container from '../wrapper/Container'

function KeranjangList({ keranjangState }: { keranjangState: KeranjangState }) {

    return (
        <Container>
            {keranjangState.keranjang.map((item) => {
                return (
                    <KeranjangItem key={item.menu.id} keranjang={item} />
                )
            })}
            <Divider />
            <div className={styles.totalFlex}>
                <Typography.Title level={3} style={{ flex: 1 }}>Total</Typography.Title>
                <Typography.Title level={3} style={{ flex: 1, textAlign: 'right' }}>Rp. {keranjangState.total}</Typography.Title>
            </div>
        </Container>


    )
}

function mapStateToProps(state: AppState) {
    return {
        keranjangState: state.keranjang
    }
}

export default connect(mapStateToProps)(KeranjangList)
