import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  // (i) When the component loads check if a theme is set in the theme state
  useEffect(() => {
    if(!theme) {
      loadUserSettings(); // (ii) Call loadUserSettings
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function loadUserSettings() {
    // (iii) Load the user settings from local storage
    let userSettings = localStorage.getItem('userSettings') 

    // (iv) If userSettings are defined set them up. In this case we load the theme into the theme state
    if (userSettings) {
      userSettings = JSON.parse(userSettings)
      setTheme(userSettings.theme)
    } else {
      // (v) If no user settings are in local storage, use the default settings
      defaultSettings()
    }
  };

  // (vi) Setup default settings
  function defaultSettings() {
    // (vii) Check OS if the user has default media color settings & if so, set the app to it!
    const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // (ix) Create function to save new userSettings to local storage
  function saveUserSettings() {
    let toggledTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem('userSettings', JSON.stringify({ theme: toggledTheme }))
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
    saveUserSettings() // (viii) Save the new user settings to local storage
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}