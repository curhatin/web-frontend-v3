import {
    combineReducers
} from "redux"

import authReducer from "./authReducer"
import postReducer from "./postReducer"

const rootReducers = combineReducers({
    auth : authReducer,
    post : postReducer
})

export default rootReducers