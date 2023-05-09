import styles from './AnchorCard.module.scss'
import Link from 'next/link'
import useTheme from "@/hooks/useTheme";

const AnchorCard = ({ href, children }) => {
  const { theme } = useTheme();

  return (
    <Link 
      className={`${styles.anchorCard} ${styles[theme]}`}
      href={href}
    >
      {children}
    </Link>
  )
}

export default AnchorCard