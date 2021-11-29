import { Divider, Typography } from 'antd'
import React, { } from 'react'
import KeranjangItem from './KeranjangItem'
import styles from '../../styles/Main.module.css'
import { connect } from 'react-redux'
import { AppState } from '../../utils/reduxes/store'
import { KeranjangState } from '../../utils/reduxes/cart/KeranjangReducer'
import Container from '../wrapper/Container'
import { ShoppingCartOutlined } from '@ant-design/icons'

function KeranjangList({ keranjangState }: { keranjangState: KeranjangState }) {

    return (
        <Container>
            {keranjangState.keranjang.length > 0 ? keranjangState.keranjang.map((item) => {
                return (
                    <KeranjangItem key={item.menu.id} keranjang={item} />
                )
            }) : (
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '72px', padding: '50px', textAlign: 'center' }}>
                    <ShoppingCartOutlined />
                    <Typography.Title level={3}>Keranjang Kosong</Typography.Title>
                </div>

            )}
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
