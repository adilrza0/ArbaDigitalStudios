import { Alert, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";


export default function Register({setLoginSignUp}) {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [price,setprice]=useState("");
    const [cnfPassword,setCnfPassword]=useState("");
    const [userName,setUserName]=useState("");


    
    const [message,setMessage]=useState("")
    const [registerSuccess, setRegisterSuccess] = useState(false);
    
    const handleRegister = () => {
        if(cnfPassword===password){
            
            fetch("https://cyan-stormy-antelope.cyclic.app/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    userName,
                }),
            })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                // If successful, parse the response data
                return response.json();
                }
                // If not successful, throw an error
                throw new Error("Network response was not ok.");
            })
            .then((data) => {
                
                console.log(data);
                setRegisterSuccess(true);
                setMessage(data.message)
                setTimeout(() => {
                    setLoginSignUp(false)
                }, 2000);
                
            })
            .catch((err) => {
                console.error(err);
            });
        }
        else{
            alert("both Password and Confirm Password should be same")
        }
    }
  return (
    
    
    <Stack direction={"column"} spacing={3} padding={12}>
        <Snackbar open={registerSuccess} autoHideDuration={6000}>
        <Alert
          
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
            {message}
        </Alert>
      </Snackbar>
      <Typography variant="h5">App Name</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
      <TextField
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        type="text"
        id="outlined-basic"
        variant="standard"
        label="Username"
      />
      <TextField
        value={price}
        onChange={(e)=>setprice(e.target.value)}
        type="text"
        variant="standard"
        label="Price"
      />
      <TextField
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        type="text"
        variant="standard"
        label="Title"
      />
      <TextField
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        type="description"
        variant="standard"
        label="description"
      />
      <TextField
        value={cnfPassword}
        onChange={(e)=>setCnfPassword(e.target.value)}
        type="password"
        variant="standard"
        label="Confirm Password"
      />
      <Button onClick={handleRegister} variant="contained">Register</Button>
      <p>
        Already have an account ? <span onClick={()=>setLoginSignUp(false)} style={{ color: "#0E86D4" }}>Login</span>
      </p>
    </Stack>
  );
}
