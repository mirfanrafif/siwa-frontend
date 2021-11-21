import { RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE } from "./ActionConstants";


import { getCookie, setCookie, removeCookie } from './cookies';


let initialState: {};
if (typeof localStorage !== "undefined") {
    const authCookie = getCookie('auth');
    if (authCookie) {
        console.log(decodeURIComponent(authCookie))
        initialState = JSON.parse(decodeURIComponent(authCookie));
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
            removeCookie("auth");
            return {
                ...state,
                isLoggedIn: false
            };


        case AUTHENTICATE:
            const authObj = {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
            setCookie("auth", JSON.stringify(authObj));
            return authObj;
        case RESTORE_AUTH_STATE:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            };
        default:
            return state;
    }
};

export default authReducer;