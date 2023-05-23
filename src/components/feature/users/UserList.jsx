import { Fragment, useState } from "react";
import styles from './UserList.module.scss'
import UserRow from "./UserRow";
import Pagination from "@/components/common/Pagination";
import paginate from "@/lib/pagination/paginate";

// (i) STRUCTURE OF OUR LOOP: 
const UserList = ({ users, itemsCount }) => {  
  // Pagination States
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION FUNCTION 1: Handle changing of page
  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  }

  // PAGINATION FUNCTION 2: Cut total users array into pages
  const paginatedUsers = paginate(users, currentPage, pageSize);

  return (
    <Fragment>
      {/* DATA LIST */}
      <div className={styles.userList}>
        {paginatedUsers.map((user) => (
          <UserRow 
            key={user.id} 
            login={user.login} 
            avatarUrl={user.avatar_url} 
            htmlUrl={user.html_url}
          />
        ))}
      </div>
      {/* PAGINATION */}
      <Pagination 
        itemsCount={itemsCount} 
        currentPage={currentPage}
        pageSize={pageSize} 
        onPageChange={handlePageChange}
      />
    </Fragment>

  )
}

export default UserList;