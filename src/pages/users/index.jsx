import React, { useEffect, useState } from "react";
import UserList from "@/components/feature/users/UserList";
import Loader from "@/components/common/Loader";
import { Container } from "react-bootstrap";

const UsersPage = () => {
  // States & Initial States
  const [users, setUsers] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [query, setQuery] = useState("kuuz")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // DATA FETCH: Call API Data on Mount
  useEffect(() => {
    fetchUsers(query);
    setItemsCount(users.length);
    console.log(`CORRECT Total Users Count: ${itemsCount}`)
    setLoading(false);
  }, [query, users.length, itemsCount]);

  // Fetch API Data Function
  async function fetchUsers(query) {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      console.log(data);
      setUsers(data.items);

      // GITHUB API: The total count is WRONG - do ourselves!
      // setItemsCount(data.total_count);

    } catch (err) {
      setError("Fetch Error: Cannot Retrieve Github Data")
      console.log(err)
    }
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
      { users.length > 0 && <UserList users={users} itemsCount={itemsCount} /> }
    </Container>
  )
}

export default UsersPage