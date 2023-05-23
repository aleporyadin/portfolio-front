import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  const [isAdmin, setIsUser] = useState(false);
  const [isModerator, setIsModerator] = useState(false);
  const [isUser, setIsAdmin] = useState(false);

  const contextValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      isAdmin,
      setIsAdmin,
      isModerator,
      setIsModerator,
      isUser,
      setIsUser
    }),
    [currentUser, isAdmin, isModerator, isUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      <ToastContainer className="notification-container" />
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
