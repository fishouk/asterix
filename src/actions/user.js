import { userLoginRequest, userLogoutRequest } from './index';

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(userLoginRequest([username, password]));  
    };
}

function logout() {
    return dispatch => {
        dispatch(userLogoutRequest());  
    };
}