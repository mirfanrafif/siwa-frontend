import Swal from "sweetalert2";
import UserService from "../../services/UserService";
import { AUTHENTICATE, DEAUTHENTICATE } from "../ActionConstants";

export const authenticateAction = (user) => {
    return {
        type: AUTHENTICATE,
        payload: user
    };
};


export const deAuthenticateAction = () => {
    return {
        type: DEAUTHENTICATE,
    };
};

export const login = (loginDetails) => {
    return (dispatch) => {
        try {
            dispatch(deAuthenticateAction());
            // login code. And storing data in result variable
            UserService().login(loginDetails).then((res) => {
                dispatch(authenticateAction(res));
            }).catch((err) => {
                Swal.fire({ title: "Gagal Login", text: "Terjadi kesalahan saat login" + err, icon: "error" })
            })

        } catch (e) {
            dispatch(deAuthenticateAction());
        }
    };
};


export const signUp = signUpDetails => {
    return async dispatch => {
        try {
            dispatch(deAuthenticateAction());
            // Signup code. And storing data in result variable
            const result = {
                ...signUpDetails,
                role: 'kasir'
            }
            dispatch(authenticateAction(result));


        } catch (e) {
            dispatch(deAuthenticateAction());
        }
    };
};


export const logout = () => {
    return dispatch => {
        dispatch(deAuthenticateAction())
    }
};