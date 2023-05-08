import styles from './Loader.module.scss';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Spinner className={styles.customSpinner} animation="border" variant="info" />
  )
}

export default Loader