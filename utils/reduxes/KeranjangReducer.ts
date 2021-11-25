import { AUTHENTICATE, DEAUTHENTICATE, ADD_CART } from "./ActionConstants";
import Keranjang from '../models/keranjang'

var initialState: Keranjang[] = []
if (typeof localStorage !== "undefined") {
    const keranjangLocal = JSON.parse(localStorage.getItem('cart') || "[]")
    if (keranjangLocal) {
        initialState = keranjangLocal
    }
}


const keranjangReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            const newListKeranjang: Keranjang[] = [...state]
            const menuIndex = newListKeranjang.findIndex((keranjang: Keranjang) => {
                return keranjang.menu.id == action.payload.id
            })
            if (menuIndex > -1) {
                const newKeranjang = { ...newListKeranjang[menuIndex] }
                newKeranjang.jumlah += 1;
                newListKeranjang[menuIndex] = newKeranjang
            } else {
                newListKeranjang.push({ menu: action.payload, jumlah: 1 })
            }
            localStorage.setItem('cart', JSON.stringify(newListKeranjang))
            return newListKeranjang
        default:
            return state;
    }
};

export default keranjangReducer;