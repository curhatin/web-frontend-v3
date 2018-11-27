import {
    LOGIN_AUTH,
    OUT_AUTH
} from "./types"
import axios from "axios";

export const login = ({email, password}) => (dispatch) => {
    axios.post("https://curhatin.herokuapp.com/account/login",{
        email,
        password
    })
    .then(res => {
        console.log(res)
        if(res.data.token){
            dispatch({
                type: LOGIN_AUTH,
                payload: res.data.token
            })
            localStorage.token = res.data.token
        }
        
    })
    .catch(err => console.log(err))
}

export const cekToken = (token) => (dispatch) => {
    // axios.post("https://curhatin.herokuapp.com/account/login",{
    //     email,
    //     password
    // })
    // .then(res => dispatch({
    //     type: LOGIN_AUTH
    // }))
    // .catch(err => console.log(err))
    dispatch({
        type: LOGIN_AUTH,
        payload: token
    })
}

