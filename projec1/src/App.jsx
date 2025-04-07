import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/userlist";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("https://jsonplaceholder.typicode.com/users") // API endpoint
      .then((response) => {
        setUsers(response.data); // Store all users
        setFilteredUsers(response.data); // Initially, display all users
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Handle error
      });
  }, []); 

  // Delete user by filtering out the user with the given id
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers); // Update the original list of users
    setFilteredUsers(updatedUsers); // Update the filtered list of users
  };

  // Filter users based on username
  const filterUsers = (username) => {
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(username.toLowerCase())
    );
    setFilteredUsers(filtered); // Update the filtered users list
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <UserList
        users={filteredUsers} // Pass filtered users to UserList
        deleteUser={deleteUser}
        filterUsers={filterUsers} // Pass filter function to UserList
      />
    </div>
  );
};

export default App;

