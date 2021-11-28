import User from "../../models/User";
import { RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE } from "../ActionConstants";

type AuthState = {
    isLoggedIn: boolean,
    user: User
}

var initialState: AuthState = {
    isLoggedIn: false,
    user: null
}
if (typeof localStorage !== "undefined") {
    const localAuth = JSON.parse(localStorage.getItem('auth') || "{}")
    if (localAuth) {
        initialState = localAuth
    } else {
        initialState = {
            isLoggedIn: false,
            user: null
        }
    }
} else {
    initialState = {
        isLoggedIn: false,
        user: null
    };
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEAUTHENTICATE:
            const deauthObj: AuthState = {
                ...state,
                isLoggedIn: false,
                user: null
            }
            if (typeof localStorage !== "undefined") {
                localStorage.setItem('auth', JSON.stringify(deauthObj))
            }
            return deauthObj;
        case AUTHENTICATE:
            const authObj: AuthState = {
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