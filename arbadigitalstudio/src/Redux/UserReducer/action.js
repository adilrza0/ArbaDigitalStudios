import { LOGINDATA, LOGOUT } from "../actionTypes"


export const addLogindata=(user)=>(dispatch)=>{
    dispatch({type:LOGINDATA,payload:user})
}

export const logout=(navigate)=>(dispatch)=>{
    
    console.log(dispatch)
    localStorage.clear()
    
    dispatch({type:LOGOUT})
    navigate("/auth")


}