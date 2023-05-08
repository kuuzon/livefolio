// 2(i) Create new custom hook useTheme
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// (ii) Create useTheme Custom Hook to make accessing ThemeContext values easier
const useTheme = () => {
  // (iii) Return the output of the access to our ThemeContext
  return useContext(ThemeContext);
}

export default useTheme;