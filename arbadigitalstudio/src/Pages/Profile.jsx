import React from 'react'
import Navbar from '../Components/Navbar'
import { Button, Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import UpdateUser from '../Components/UpdateUser'
import ChangePassword from '../Components/ChangePassword'
import { useSelector } from 'react-redux'



export default function Profile() {
  const {user}=useSelector((store)=>store.userReducer)

  return (
    <div>
        <Navbar/>

        <Stack padding={5} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                <IMAGE src='https://www.shareicon.net/data/128x128/2016/07/26/802016_man_512x512.png' />
                <Typography variant='h4'>{user.fullName}</Typography>      
                <Typography variant='h5'>{user.email}</Typography>          
            
            
            <UpdateUser/>
            <Stack direction={"row"} spacing={5} justifyContent="center" alignContent={'center'}>
                <Button variant='contained'>See T & C</Button>
                
                <ChangePassword/>

            </Stack>
        </Stack>
    </div>
  )
}


const IMAGE=styled.img`
  width:300px;
  margin:auto;
  margin-bottom:20px;
  

`