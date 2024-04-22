import { LOGINDATA, LOGOUT } from "../actionTypes"

const initialState={
    user:{},
    cart:{},
    auth:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGINDATA:{
            return {...state,user:payload,auth:true}
        }
        case LOGOUT:{
            return {...state,user:{},auth:false}
        }
        default:{
            return state
        }
    }
}