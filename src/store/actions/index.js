import axios from 'axios'

export const postData = (add_blog) =>{
    console.log(add_blog, 'task post data')
    return async (dispatch) => {
        await axios.post("https://jsonplaceholder.typicode.com/posts", add_blog)
            .then(res => {
                dispatch({
                    type: 'POST_DATA',
                    payload: res.data
                });
                console.log(res.data, 'res in action')
            })
    }
};

export const updatePostData = (id, blog) =>{
    return async (dispatch)=>{
        await axios.put("https://jsonplaceholder.typicode.com/posts/"+ id, blog)
            .then(res => {
                dispatch({
                    type: 'UPDATE_DATA',
                    payload: res.data
                });
                console.log(res.data, 'res.data')
            })
    }
};

export const getData = ()=>{
    return async (dispatch)=>{
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                dispatch({
                    type: 'GET_DATA',
                    payload: res.data
                });
            })
    }
};


