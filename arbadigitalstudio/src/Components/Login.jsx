import { Alert, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLoginSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("https://cyan-stormy-antelope.cyclic.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
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
        localStorage.setItem("token", data.token);
        setLoginSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Stack direction={"column"} spacing={3} padding={12}>
      <Snackbar open={loginSuccess} autoHideDuration={6000}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Login Successfull
        </Alert>
      </Snackbar>
      
      <Typography variant="h5">App Name</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        variant="standard"
        label="Email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        variant="standard"
        label="Password"
      />
      <Button onClick={handleLogin} variant="contained">
        Login
      </Button>
      <p>
        Dont have an account ?{" "}
        <span onClick={() => setLoginSignUp(true)} style={{ color: "#0E86D4" }}>
          Signup
        </span>
      </p>
    </Stack>
  );
}
