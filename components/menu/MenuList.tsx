import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import MenuMakanan from '../../utils/models/menu'
import Container from '../wrapper/Container'
import MenuCard from './MenuCard'

export default function MenuList(
    { menuData, onAddItem }
        : {
            menuData: MenuMakanan[],
            onAddItem(item: MenuMakanan): void
        }
) {

    const [categorizedMenu, setCategorizedMenu] = useState([])

    useEffect(() => {
        const categoryList = menuData.map((element) => { return element.jenis_menu })
        const distinctCategory = Array.from(new Set(categoryList))
        // console.log(distinctCategory)

        const data = distinctCategory.map((category) => {
            return {
                jenis_menu: category,
                list_menu: menuData.filter((makanan) => makanan.jenis_menu == category)
            }
        })

        setCategorizedMenu(data)
    }, [menuData])

    return (
        <div>
            {

                categorizedMenu.map((element) => (
                    <Container key={element.jenis_menu}>
                        <Typography.Title level={3}>Menu {element.jenis_menu}</Typography.Title>
                        <Row gutter={20}>
                            {
                                element.list_menu.map((data) => {
                                    return (
                                        <Col span={6}
                                            key={data.id}
                                            onClick={() => {
                                                onAddItem(data)
                                            }}
                                            style={{ marginBottom: 20 }}
                                        >
                                            <MenuCard menu={data} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                ))


            }
        </div>
    )
}
