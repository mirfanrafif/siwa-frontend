import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import AuthReducer from "./AuthReducer";
import logger from 'redux-logger'
import { createWrapper } from 'next-redux-wrapper';


const reducers = combineReducers({auth: AuthReducer});


export const initStore = (initialState = {}) => {
   return createStore(
       reducers,
       initialState,
       composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
   )
};

export const wrapper = createWrapper(initStore, {debug: true})

