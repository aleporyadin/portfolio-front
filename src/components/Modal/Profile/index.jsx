import React, {useContext, useState} from "react";
import {Avatar, Box, Fade, Modal, Typography} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import "./index.css";
import AuthContext from "../../../context/AuthContext";

const style = {
  position: "absolute",
  top: "25%",
  left: "36%",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "15px"
};


export default function Profile({isOpen, onClose}) {
  const {currentUser} = useContext(AuthContext);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{backdrop: Backdrop}}
      slotProps={{backdrop: {timeout: 500}}}>
      <Fade in={isOpen}>
        <Box sx={style}>

          <div className="grid grid-rows-2 grid-cols-3">
            <div className="row-span-2 col-span-1 col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-white">
                <div className="flex justify-center">
                  <Avatar alt={currentUser.username} src={currentUser.avatar || "user.svg"} sx={{width: 48, height: 48}}/>

                </div>
                <h6 className="f-w-600 text-xl2">{currentUser.first_name} {currentUser.last_name}</h6>
                <p className="text-xl">@{currentUser.username}</p>
                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
              </div>
            </div>
            <div className="row-span-2 col-span-2">
              <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Email</p>
                    <h6 className="text-muted f-w-400">{currentUser.email}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Phone</p>
                    <h6 className="text-muted f-w-400">98979989898</h6>
                  </div>
                </div>
                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Recent</p>
                    <h6 className="text-muted f-w-400">Sam Disuja</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Most Viewed</p>
                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                  </div>
                </div>
                <ul className="social-link list-unstyled m-t-40 m-b-10">
                  <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                         data-original-title="facebook" data-abc="true"><i
                    className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a>
                  </li>
                  <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                         data-original-title="twitter" data-abc="true"><i
                    className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                         data-original-title="instagram" data-abc="true"><i
                    className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
