
const initState = {
    blogs: []
}

const myReducer = (state = initState, action )=> {

    switch(action.type) {
        case 'GET_DATA':
            return{
                blogs: action.payload
            };

        case 'POST_DATA':
            return{
                ...state,
                blogs: [...state.blogs,  action.payload]
            };

        // case 'DEL_DATA':
        //     return{
        //         blogs: state.blogs.filter((item) => item.id !== action.payload.id)
        //     };

        case 'UPDATE_DATA':
            console.log(action.payload, 'action.payload')
            console.log(state, 'state')
            return{
                ...state,
                blogs: state.blogs.map(item =>{
                    if(item.id !== action.payload.id) return item
                    return {...state.blogs, ...action.payload}
                })
            };

        default:{
            return state;
        }
    }}
export default myReducer;