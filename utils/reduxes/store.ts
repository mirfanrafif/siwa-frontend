import { combineReducers } from 'redux'
import AuthReducer from "./auth/AuthReducer";
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import keranjangReducer from './cart/KeranjangReducer';

const store = () => configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
        keranjang: keranjangReducer
    }),
    preloadedState: {},
    devTools: true
})

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper(store, { debug: true })