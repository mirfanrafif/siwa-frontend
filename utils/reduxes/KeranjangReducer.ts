import { AUTHENTICATE, DEAUTHENTICATE, ADD_CART, CLEAR_CART } from "./ActionConstants";
import Keranjang from '../models/keranjang'

export type KeranjangState = {
    keranjang: Keranjang[],
    total: number
}

var initialState: KeranjangState = {
    keranjang: [],
    total: 0
}
if (typeof localStorage !== "undefined") {
    const keranjangLocal = localStorage.getItem('cart')
    if (keranjangLocal) {
        initialState = JSON.parse(keranjangLocal)
    }
}


const keranjangReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            var newKeranjangList = [...state.keranjang]

            //add to keranjang
            const menuIndex = newKeranjangList.findIndex((keranjang: Keranjang) => {
                return keranjang.menu.id == action.payload.id
            })
            if (menuIndex > -1) {
                const newKeranjang = { ...newKeranjangList[menuIndex] }
                newKeranjang.jumlah += 1;
                newKeranjangList[menuIndex] = newKeranjang
            } else {
                newKeranjangList.push({ menu: action.payload, jumlah: 1 })
            }

            //count total
            var newTotal: number = 0
            newKeranjangList.forEach((value) => {
                newTotal += (value.menu.harga * value.jumlah)
            })
            const newKeranjangState: KeranjangState = {
                ...state,
                keranjang: newKeranjangList,
                total: newTotal
            }

            localStorage.setItem('cart', JSON.stringify(newKeranjangState))
            return newKeranjangState

        case CLEAR_CART:
            const newKeranjang: KeranjangState = {
                ...state,
                total: 0,
                keranjang: []
            }
            localStorage.setItem('cart', JSON.stringify(newKeranjang))
            return newKeranjang
        default:
            return state;
    }
};

export default keranjangReducer;