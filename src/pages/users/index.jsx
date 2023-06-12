import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import UserList from "@/components/feature/users/UserList";
import Loader from "@/components/common/Loader";

const UsersPage = () => {
  // FALLBACK STATES
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // USER STATES
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("kuuz");
  // PAGINATION STATES
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCount, setItemsCount] = useState(1);

  // DATA FETCH: Call API Data on Mount
  useEffect(() => {
    fetchUsers(query, pageSize, currentPage);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [query, pageSize, currentPage]);

  // FUNCTION: Fetch API User Data - https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-users
  async function fetchUsers(query, pageSize, currentPage) {
    try {
      const url = `https://api.github.com/search/users?q=${query}&per_page=${pageSize}&page=${currentPage}`
      const headers = {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const response = await fetch(url, { headers });
      const data = await response.json();
      console.log(data);
      setUsers(data.items);
      setItemsCount(data.total_count > 1000 ? 1000 : data.total_count);

    } catch (err) {
      setError("Fetch Error: Cannot Retrieve Github Data")
      console.log(err)
    }
  }

  // PAGINATION FUNCTION 1: Handle changing of page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  // Conditional Renders
  if (loading) {
    console.log("Loading Component...");
    return (
      <Container className='text-center mt-5'>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className='text-center mt-5'>
        <h4>{error}</h4>
      </Container>
    )
  }

  // Successful render
  return (
    <Container>
      { users.length > 0 && <UserList 
        users={users}
        itemsCount={itemsCount} 
        currentPage={currentPage}
        pageSize={pageSize} 
        onPageChange={handlePageChange} 
      /> }
    </Container>
  )
}

export default UsersPage