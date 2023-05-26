const LOCAL_STORAGE_KEYS = [
  "api-key",
  "api-secret",
  "x-api-key",
  "last-activity"
];

const clearSessionStorage = (keys = []) => {
  keys.forEach((key) => {
    sessionStorage.removeItem(key);
  });
};

const clearOnSignOut = () => {
  clearSessionStorage(LOCAL_STORAGE_KEYS);
};

const setSessionItem = (props = {}) => {
  LOCAL_STORAGE_KEYS.forEach((key) => {
    let value = props[key];
    if (value) {
      sessionStorage.setItem(
        key,
        typeof value === "string" ? value : JSON.stringify(value)
      );
    }
  });
};

const getSessionItem = (key = "", parse = false) => {
  let value = sessionStorage.getItem(key);
  return parse ? JSON.parse(value) : value;
};

const SessionStorage = {
  getSessionItem,
  setSessionItem,
  clearOnSignOut,
  clearSessionStorage
};

export default SessionStorage;
