import Link from 'next/link';
import styles from './AbpLink.module.scss'

const AbpLink = ({ path, target, children }) => {
  return (
    <Link 
      href={path} 
      target={target ? "_blank" : "_self"}
      className={styles.btn}
    >
      {children}
    </Link>
  );
};

export default AbpLink