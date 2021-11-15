import { Col, Row } from 'antd'
import React from 'react'
import MenuMakanan from '../../utils/models/menu'
import MenuCard from './MenuCard'

export default function MenuList(
    { menuData, onAddItem }
        : {
            menuData: MenuMakanan[],
            onAddItem(item: MenuMakanan): void
        }
) {
    return (
        <Row gutter={20}>
            {
                menuData.map((data) => {
                    return (
                        <Col span={6}
                            key={data.id}
                            onClick={() => {
                                onAddItem(data)
                            }}
                            style={{marginBottom: 20}}
                        >
                            <MenuCard menu={data} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}
