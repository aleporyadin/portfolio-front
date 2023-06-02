import React, {useContext, useState} from "react";
import "components/Modal/Permissions/PermissionsGroup/index.scss";
import AuthContext from "context/AuthContext";
import SendIcon from "@mui/icons-material/Send";
import {LoadingButton} from "@mui/lab";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {Box, makeStyles, Modal} from "@mui/material";

export const useStyle = makeStyles({
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "20%",
    minHeight: "400px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "10px 20px 20px 20px"
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "320px",
    minHeight: "220px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "10px 20px 20px 20px"
  },
  datePicker: {
    height: "44px",
    width: "130px"
  },
  btnCancel: {
    "&.MuiButton-text": {
      color: "#00a2ff",
      textTransform: "none",
      fontWeight: 600,
      fontSize: 16,
      fontFamily: "Barlow, sans-serif"
    }
  }
});

export default function Notification({isOpen, onClose}) {
  const classes = useStyle();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box boxShadow={3} className={classes.modalContainer}>

      </Box>
    </Modal>
  );
}
