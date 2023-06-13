import { Fragment } from "react";
import styles from './UserList.module.scss'
import UserRow from "./UserRow";
import AbpPagination from "@/components/common/AbpPagination";

const UserList = ({ users, itemsCount, currentPage, pageSize, onPageChange }) => {  
  return (
    <Fragment>
      {/* DATA LIST */}
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
      {/* PAGINATION */}
      <AbpPagination 
        itemsCount={itemsCount} 
        currentPage={currentPage}
        pageSize={pageSize} 
        onPageChange={onPageChange}
      />
    </Fragment>

  )
}

export default UserList;