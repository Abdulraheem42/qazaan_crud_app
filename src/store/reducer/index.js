
const initState = {
    blogs: [],
    isLoaded: true
}

const myReducer = (state = initState, action )=> {

    switch(action.type) {
        case 'GET_DATA':
            return{
                blogs: action.payload,
                isLoaded: false
            };

        case 'POST_DATA':
            return{
                ...state,
                blogs: [action.payload, ...state.blogs],
                isLoaded: false
            };

        case 'UPDATE_DATA':
            const update = state.blogs.map(item =>{
                    if(item.id !== action.payload.id) return item
                    return {...state.blogs, ...action.payload}
                });
            return{
                ...state,
                blogs: update,
                isLoaded: false
            };

        default:{
            return state;
        }
    }}
export default myReducer;