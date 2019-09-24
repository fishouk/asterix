import {
    FETCH_NEWS_PENDING,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_ERROR,
    USERS_LOGIN_REQUEST,
    USERS_LOGOUT_REQUEST
  } from '../actions/index'
import initialState from "../store/initialState";


const Reducer = (state = initialState, action) => {    
    const admin = state.users[0].admins[0].admin1;
    let userLogined = null;
    if (localStorage.user) {userLogined= JSON.parse(localStorage.user);}
    

    switch(action.type) {
        case FETCH_NEWS_PENDING: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_NEWS_SUCCESS:
            const news = action.payload.documents;
            const newsList = Object.values(news);
            return {
                ...state,
                isLoading: false,
                news: newsList
            }
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case USERS_LOGIN_REQUEST:     
            let error = null;       
            const userLogin = action.payload;
            if (admin.username === userLogin[0] && admin.password === userLogin[1]) {
                admin.isLogin = true;
                localStorage.setItem('user', JSON.stringify(admin));                
            } else {
                error = true;
            }
            return {
                ...state,
                error: error
            }
        case USERS_LOGOUT_REQUEST:

            if (admin.username === userLogined.username && admin.password === userLogined.password) {
                admin.isLogin = false;
                localStorage.clear();
            } else {
                alert('Что-то не так с выходом')
            }
            // let error = null;
            // const admin = state.users[0].admins[0].admin1;
            // const userLogin = action.payload;
            // if (admin.username === userLogin[0] && admin.password === userLogin[1]) {
            //     admin.isLogin = true;
            //     localStorage.setItem('user', JSON.stringify(admin));
            //     history.push( '/profile');
            // } else {
            //     error = true;
            // }
            return {
                ...state,
            }
        default: 
            return state;
    }
}

export const getNews = state => state.news;
export const getNewsPending = state => state.isLoading;
export const getError = state => state.error;
export const getUsers = state => state.users;


export default Reducer;