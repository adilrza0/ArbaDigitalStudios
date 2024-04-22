import  React,{ useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useSelector } from "react-redux";


const style = {
  position: "absolute",
  borderRadius:"10px",
  gap:"20px",
  display:"flex",
  flexDirection:'column',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
};

export default function UpdateUser() {


  const {user,}=useSelector((store)=>store.userReducer)
  
    
  const [email, setEmail] =useState(user.email);
  const [fullName, setFullName] = useState(user.fullName);
  const [userName,setUserName]=useState(user.userName);

  const [message, setMessage] = useState("");
  const [updateSuccess, setupdateSuccess] = useState(false);
    console.log(user.email,fullName,userName,user)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  

  const handleUpdate = () => {
    
      fetch(`https://cyan-stormy-antelope.cyclic.app/user/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullName,
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
          setupdateSuccess(true);
          setMessage(data.message);
          setTimeout(() => {
            
          }, 2000);
        })
        .catch((err) => {
          console.error(err);
        });
  };

  return (
    <div>

      <Button variant="contained" onClick={handleOpen}>
        Update Profile
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >

        <Fade in={open}>
          <Box sx={style}>
            
          <Snackbar open={updateSuccess} autoHideDuration={3000}>
        <Alert
          
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
            {message}
        </Alert>
      </Snackbar>
            <TextField
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              id="outlined-basic"
              variant="standard"
              label="Username"
            />
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              id="outlined-basic"
              variant="standard"
              label="Full Name"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="outlined-basic"
              variant="standard"
              label="Email"
            />
            <Button onClick={handleUpdate} sx={{margin:"20px"}} variant="contained">Update</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
