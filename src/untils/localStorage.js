const LOCAL_STORAGE_KEYS = ["api-key", "api-secret", "x-api-key", "last-activity"];

export const clearLocalStorage = (keys = []) => {
  keys.forEach(key => {
    localStorage.removeItem(key);
  });
};

export const clearOnSignOut = () => {
  clearLocalStorage(LOCAL_STORAGE_KEYS);
};

export const setLocalItem = (props = {}) => {
  LOCAL_STORAGE_KEYS.forEach(key => {
    let value = props[key];
    if (value) {
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    }
  });
};

export const getLocalItem = (key = "", parse = false ) => {
  let value = localStorage.getItem(key);
  return parse ? JSON.parse(value) : value;
};
