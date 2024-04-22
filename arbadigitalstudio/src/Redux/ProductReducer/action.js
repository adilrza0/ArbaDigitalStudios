import { GET_PRODUCTS } from "../actionTypes"

export const getProduct=(products)=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS,payload:products})
}