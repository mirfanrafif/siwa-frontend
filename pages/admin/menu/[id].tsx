import React from 'react'
import FormMenu from '../../../components/menu/FormMenu'
import { MenuService } from '../../../utils/services/MenuService'
const { getMenu, detailMenu } = MenuService()

export default function Edit({ menu }) {
    return (
        <FormMenu menu={menu} />
    )
}

export async function getStaticPaths() {
    const menus = await getMenu()
    const paths = menus.map((makanan) => ({
        params: { id: makanan.id.toString() }
    }))

    console.log(paths)

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const menu = await detailMenu(params.id)
    return { props: { menu } }
}
