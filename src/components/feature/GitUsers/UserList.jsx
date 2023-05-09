import UserRow from "./UserRow";
import styles from './UserList.module.scss'

// (i) STRUCTURE OF OUR LOOP: 
const UserList = ({ users }) => (
  <div className={styles.userList}>
    {users.map((user) => (
      <UserRow 
        key={user.id} 
        login={user.login} 
        avatarUrl={user.avatar_url} 
        htmlUrl={user.html_url}
      />
    ))}
  </div>
);

export default UserList;