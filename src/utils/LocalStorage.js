const LocalStorageUtil = {
  getItem(key) {
    try {
      const serializedItem = localStorage.getItem(key);
      if (serializedItem === null) {
        return undefined;
      }
      return JSON.parse(serializedItem);
    } catch (error) {
      console.error(`Error retrieving item from localStorage: ${error}`);
      return undefined;
    }
  },

  setItem(key, value) {
    try {
      const serializedItem = JSON.stringify(value);
      localStorage.setItem(key, serializedItem);
    } catch (error) {
      console.error(`Error setting item in localStorage: ${error}`);
    }
  },

  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage: ${error}`);
    }
  }
};

export default LocalStorageUtil;
