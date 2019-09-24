export const FETCH_NEWS_PENDING = 'FETCH_NEWS_PENDING';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';
export const USERS_LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
export const USERS_LOGOUT_REQUEST = 'USERS_LOGOUT_REQUEST';

export function fetchNewsPending() {
    return {
        type: FETCH_NEWS_PENDING
    }
}

export function fetchNewsSuccess(news) {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export function fetchNewsError(error) {
    return {
        type: FETCH_NEWS_ERROR,
        error: error
    }
}

export function userLoginRequest(user) {
    return {
        type: USERS_LOGIN_REQUEST,
        payload: user
    }
}

export function userLogoutRequest() {
    return {
        type: USERS_LOGOUT_REQUEST,
    }
}


