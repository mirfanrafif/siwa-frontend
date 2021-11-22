import { combineReducers } from 'redux'
import AuthReducer from "./AuthReducer";
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

const store = () => configureStore({
    reducer: combineReducers({
        auth: AuthReducer
    }),
    preloadedState: {},
    devTools: true
})

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper(store, {debug: true})

