import {
    LOGIN_AUTH
} from '../actions/types'

const initialState = {
    isAuthenticated: false

}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_AUTH : 
            return {
                ...state,
                isAuthenticated: true
            }
            default:
            return state
    }
}









