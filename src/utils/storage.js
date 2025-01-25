export const saveToLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  export const getFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key) || '[]');
    }
    return [];
  };
  