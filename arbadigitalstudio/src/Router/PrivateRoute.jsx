import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addLogindata } from '../Redux/UserReducer/action'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {auth,user}=useSelector((store)=>store.userReducer)
    console.log(auth,user)
    console.log()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
            const decodedtoken=jwtDecode(localStorage.getItem('token'))
            console.log(decodedtoken.userId)
            fetch(`https://cyan-stormy-antelope.cyclic.app/user/${decodedtoken.userId}`)
            .then((res)=>{
                if(res)return res.json()
            })
            .then((data)=>{
                console.log(data)
                dispatch(addLogindata(data.user))
             })
        }
        else{
            navigate("/auth")
        }
        
        
      },[dispatch,navigate])
  return (
    children
  )
}
