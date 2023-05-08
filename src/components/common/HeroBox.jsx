import styles from "./HeroBox.module.scss";
import useTheme from "@/hooks/useTheme";

const HeroBox = ({ title, children, path }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.banner} ${styles[theme]}`}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
};

export default HeroBox;
