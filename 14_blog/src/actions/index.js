import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts())    
    console.log(getState().posts)
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('posts'); 
        dispatch( {   // tu musi być dispach bo to jest funcka async wiec agodnie z regułemi thunk 
            type: 'FETCH_POSTS',  // musimy ją przekazać do dipach
            payload: response.data
        });
};   


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch( { // ten dispatch wykona sie od razu musi go zwrócić do dispatch
        type: 'FETCH_USER',
        payload: response.data
    });
}; 




/*
export const fetchUser = (id) => dispatch => {
    _fetchUser(id,dispatch)
}; 

const _fetchUser = _.memoize(async(id,dispatch)=>{
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch( {
        type: 'FETCH_USER',
        payload: response.data
    });
}
);
*/

/*
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('posts'); 
        dispatch( {
            type: 'FETCH_POSTS',
            payload: response
        });
    };   

działa tak samo jak niżej


export const fetchPosts = () => {

    return async function (ditpacj,getState){ // dispatch i getState są bo uzywamy redux
        const response = await jsonPlaceholder.get('posts'); 
        dispatch( {
            type: 'FETCH_POSTS',
            payload: response
        });
    };    
};
*/