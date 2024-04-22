import { GET_PRODUCTS } from "../actionTypes"

const initialState={
    products:[]
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS:{
            return {...payload}
        }
        default:{
            return state
        }
    }
}