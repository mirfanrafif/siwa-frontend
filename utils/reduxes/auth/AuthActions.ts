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
            const result = loginDetails
            dispatch(authenticateAction(result));
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