import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  });

  const setLocalStorageValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  };

  return [value, setLocalStorageValue];
};