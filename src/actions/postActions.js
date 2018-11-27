import {
    ADD_CURHAT
} from "./types"
import axios from "axios";



export const createCurhat = data => dispatch => {
    axios.post("https://curhatin.herokuapp.com/post",{ 
        tagId: data.tagId,
        post: data.post,
        topic: data.topic
    },{headers: {
    authorization: `Bearer ${data.token}`
    }})
    .then(res => {
        console.log(res)
        dispatch({
        type: ADD_CURHAT,
        payload: data
    })})
    .catch(err => console.log(err))
}