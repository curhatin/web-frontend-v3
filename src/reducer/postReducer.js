import {
    ADD_CURHAT, FETCH_DATA_POST, FETCH_DATA_POST_BY_ID, FETCH_DATA_POST_USER_BY_ID
} from '../actions/types'

const initialState = {
    post_list : [],
    post_list_by_id  : [],
    new_post: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_CURHAT : 
            return {
                ...state,
                new_post: action.payload
            }
            case FETCH_DATA_POST : 
            console.log(action.payload)
            return {
                ...state,
                post_list: action.payload
            }
            case FETCH_DATA_POST_BY_ID : 
            console.log(action.payload)
            return {
                ...state,
                post_detail : action.payload
            }
            case FETCH_DATA_POST_USER_BY_ID : 
            console.log(action.payload)
            return {
                ...state,
                post_list_by_id : action.payload
            }
            default:
            return state
    }
}

