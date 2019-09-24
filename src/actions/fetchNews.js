import {fetchNewsPending, fetchNewsSuccess, fetchNewsError} from './index';

const apiUrl = 'https://cors-anywhere.herokuapp.com/https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24';

function fetchNews() {
    return dispatch => {
        dispatch(fetchNewsPending());
        fetch(apiUrl)
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Something went wrong');
            }
          }
        )
        .then(res => {            
            dispatch(fetchNewsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchNewsError(error));
        })
    }
}

export default fetchNews;