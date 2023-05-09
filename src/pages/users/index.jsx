import React, { useEffect, useState } from "react";
import UserList from "@/components/feature/GitUsers/UserList";
import Loader from "@/components/common/Loader";
import { Container } from "react-bootstrap";

const GitUsers = () => {
  // States & Initial States
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect Hook Call on Load
  useEffect(() => {
    fetchUsers();
    setLoading(false);
  }, []);

  // Fetch API Data Function
  async function fetchUsers() {
    try {
      const response = await fetch(
        'https://api.github.com/search/users?q=kitten&per_page=12'
      );
      const data = await response.json();
      console.log(data.items);
      setUsers(data.items);

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
      { users.length > 0 && <UserList users={users} /> }
    </Container>
  )
}

export default GitUsers