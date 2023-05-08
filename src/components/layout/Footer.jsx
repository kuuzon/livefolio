import styles from './Footer.module.scss';
import useTheme from '@/hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();

  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={`${styles.footer} ${styles[theme]} py-3`}>
      &copy; {getCurrentYear()} <span>LIVE</span>FOLIO
    </footer>
  )
}

export default Footer