import {
    ADD_CURHAT
} from '../actions/types'

const initialState = {
    post_List : [],
    new_post: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_CURHAT : 
            return {
                ...state,
                new_post: action.payload
            }
            default:
            return state
    }
}

