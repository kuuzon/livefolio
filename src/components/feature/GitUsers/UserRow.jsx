import styles from './UserRow.module.scss';
import Image from "next/image";

// SECOND LEVEL OF ABSTRACTION
const UserRow = ({ login, avatarUrl, htmlUrl }) => {
  return (
    <div className={styles.userBox}>
      <p>{login}</p>
      <a target="_blank" rel='noreferrer' href={htmlUrl}>
        <Image 
          src={avatarUrl} 
          alt='github user' 
          width="200"
          height="200"
        />
      </a>
    </div>
  );
};

export default UserRow