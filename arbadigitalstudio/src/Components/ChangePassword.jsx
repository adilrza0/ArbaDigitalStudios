import React, {  useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  borderRadius: "10px",
  gap: "20px",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
};

export default function ChangePassword() {
  const { user } = useSelector((store) => store.userReducer);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");
  const [changePasswordSuccess, setchangePasswordSuccess] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlechangePassword = () => {
    fetch(`https://cyan-stormy-antelope.cyclic.app/user/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:user._id,
        currentPassword,
        newPassword,
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
        setchangePasswordSuccess(true);
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Change Password
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
            <Snackbar open={changePasswordSuccess} autoHideDuration={3000}>
              <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
                {message}
              </Alert>
            </Snackbar>

            <TextField
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              type="password"
              id="outlined-basic"
              variant="standard"
              label="Current Password"
            />
            <TextField
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              id="outlined-basic"
              variant="standard"
              label="New Password"
            />
            <Button
              onClick={handlechangePassword}
              sx={{ margin: "20px" }}
              variant="contained"
            >
              Change Password
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
