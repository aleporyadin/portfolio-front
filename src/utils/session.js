import SessionStorage from "./SessionStorage";

export const isSignedIn = () => {
  return SessionStorage.getSessionItem("user");
};

