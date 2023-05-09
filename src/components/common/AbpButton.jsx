import styles from './AbpButton.module.scss'
import Link from 'next/link';

const AbpButton = ({ path, target, children }) => {
  return (
    <div className={styles.btn}>
      <Link href={path} target={target ? "_blank" : "_self"}>
        {children}
      </Link>
    </div>
  );
};

export default AbpButton