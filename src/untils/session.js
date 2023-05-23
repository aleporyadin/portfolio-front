import { getLocalItem } from "./localStorage";

export const isSignedIn = () => {
  return !!getLocalItem("api-key");
};

