import Keranjang from "../../models/keranjang";
import MenuMakanan from "../../models/menu";
import { RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE, SET_LOADING, ADD_CART, CLEAR_CART, SET_CART, DELETE_CART } from "../ActionConstants";

export const addKeranjangAction = (item: MenuMakanan) => {
    return {
        type: ADD_CART,
        payload: item
    }
};
export const setKeranjangAction = (item: Keranjang) => {
    return {
        type: SET_CART,
        payload: item
    }
};

export const deleteKeranjangAction = (item: Keranjang) => {
    return {
        type: DELETE_CART,
        payload: item
    }
};

export const cartCleanAction = () => {
    return {
        type: CLEAR_CART
    }
};

export const addToCart = (menu: MenuMakanan) => {
    return async dispatch => {
        dispatch(addKeranjangAction(menu))
    }
}

export const setCart = (keranjang: Keranjang) => {
    return async dispatch => {
        dispatch(setKeranjangAction(keranjang))
    }
}

export const clearCart = () => {
    return async dispatch => {
        dispatch(cartCleanAction())
    }
}

export const deleteCart = (item: Keranjang) => {
    return async dispatch => {
        dispatch(deleteKeranjangAction(item))
    }
}
