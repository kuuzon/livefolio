import { Fragment } from 'react';
import styles from './ThemeToggler.module.scss';
import useTheme from '@/hooks/useTheme';
import Switch from "react-switch";
import { MdLightMode, MdDarkMode } from 'react-icons/md';

// Invoke the theme context within child components
const ThemeToggler = () => {
  // Access the theme context values & store
  const { theme, toggleTheme } = useTheme(); 

  return (
    <Fragment>
      <label className={styles.toggleContainer}>
        <span className={styles.label}>Switch Theme</span>
        <Switch
          // Use context values
          onChange={toggleTheme}
          checked={theme === "dark"}

          // NON-TOGGLED MODE: light
          checkedIcon={false}
          checkedHandleIcon={
            <MdDarkMode
              style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
            />
          }
          offColor='#eab308'
          
          // TOGGLED MODE: dark
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <MdLightMode
              style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
            />
          }
          onColor='#6366f1'
        />
      </label>
    </Fragment>
  );
}

export default ThemeToggler