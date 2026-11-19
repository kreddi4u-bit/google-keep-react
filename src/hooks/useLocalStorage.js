
import { useEffect, useState } from "react";

// Works like useState, but the value is also saved in the browser (localStorage)
// so it is still there after a refresh.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) return JSON.parse(saved);
    } catch (error) {
      console.warn(`Could not read "${key}" from localStorage.`, error);
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Could not save "${key}" to localStorage.`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
