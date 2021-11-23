import { RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE } from "./ActionConstants";

var initialState = {
    isLoggedIn: false,
    user: {}
}
if (typeof localStorage !== "undefined") {
    const localAuth = JSON.parse(localStorage.getItem('auth') || "{}")
    if (localAuth) {
        initialState = localAuth
    } else {
        initialState = {
            isLoggedIn: false,
            user: {}
        }
    }
} else {
    initialState = {
        isLoggedIn: false,
        user: {}
    };
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEAUTHENTICATE:
            const deauthObj = {
                ...state,
                isLoggedIn: false,
                user: {}
            }
            if (typeof localStorage !== "undefined") {
                localStorage.setItem('auth', JSON.stringify(deauthObj))
            }
            return deauthObj;
        case AUTHENTICATE:
            const authObj = {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
            if (typeof localStorage !== "undefined") {
                localStorage.setItem("auth", JSON.stringify(authObj));
            } else {
                console.log('localstorage error')
            }
            return authObj;
        default:
            return state;
    }
};

export default authReducer;