import { RESTORE_AUTH_STATE, AUTHENTICATE, DEAUTHENTICATE, SET_LOADING } from "./ActionConstants";

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


export const loadingAction = (loadingState) => {
    return {
        type: SET_LOADING,
        payload: loadingState
    }
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
        console.log("logout action created")
        dispatch(deAuthenticateAction())
    }
};

export const setLoading = (loading) => {
    return async dispatch => {
        dispatch(loadingAction(loading))
    }
}
