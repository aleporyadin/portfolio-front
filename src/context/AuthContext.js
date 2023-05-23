import { createContext } from "react";

const AuthContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  isModerator: false,
  setIsModerator: () => {},
  isUser: false,
  setIsUser: () => {}
});

export default AuthContext;
