import styles from './AbpButton.module.scss'

const AbpButton = ({ onClick, children }) => {
  return (
    <button 
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AbpButton