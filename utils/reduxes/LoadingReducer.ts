import { SET_LOADING } from "./ActionConstants"

const initialState = {
    loading: false,
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            const loadingState = {
                ...state,
                loading: action.payload
            }
            return loadingState
        default:
            return state
    }
}

export default loadingReducer