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

// export const deleteData = (id)=>{
//     return async (dispatch) => {
//         console.log(id, 'id action');
//         await axios.delete("https://jsonplaceholder.typicode.com/posts" + id)
//             .then(res => {
//                 dispatch({
//                     type: 'DEL_DATA',
//                     payload: res.data
//                 });
//                 console.log('Successfully delete')
//             })
//     }
// };
//
export const updatePostData = (id, blog) =>{
    console.log(id, 'id')
    console.log(blog, 'blog')

    return async (dispatch)=>{
        await axios.put("https://jsonplaceholder.typicode.com/posts", id, blog)
            .then(res => {
                console.log(res, 'resssss')
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


