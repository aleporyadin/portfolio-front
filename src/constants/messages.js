export const MESSAGE_CONNECTED_FAILED = () => {
  return "Cannot connected to the server";
};

export const MESSAGE_CONNECTED_FAILED_ERROR = (mess = "") => {
  return `Cannot connected to the server - ${mess}`;
};

export const CANNOT_FIND_TOKEN = () => {
  return `Cannot find authentication token`;
};
