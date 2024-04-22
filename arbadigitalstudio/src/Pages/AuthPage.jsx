import { Box, Stack } from '@mui/material'
import { blue, } from '@mui/material/colors'
import Login from '../Components/Login'
import Register from '../Components/Register'
import { useState } from 'react'



export default function AuthPage() {
    const [loginSignUp,setLoginSignUp]=useState(false)
  return (
    
     <Stack direction="row" >
        <Box sx={{width:"50%",height:"90vh"}} border={"1px solid blue"} margin="20px" bgcolor={blue[600]}>
            

        </Box>
        <Box>
            {loginSignUp?<Register setLoginSignUp={setLoginSignUp}/>:<Login  setLoginSignUp={setLoginSignUp} />}
           
        </Box>
     </Stack>


    
  )
}
