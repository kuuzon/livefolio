import styles from './AbpButton.module.scss'
import Link from 'next/link';

const AbpButton = ({ path, children }) => {
  return (
    <div className={styles.btn}>
      <Link href={path}>
        {children}
      </Link>
    </div>
  );
};

export default AbpButton