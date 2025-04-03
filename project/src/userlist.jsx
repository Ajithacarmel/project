import React, { useState } from "react";

function UserList({ users, deleteUser, editUser, filterUsers }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    filterUsers(e.target.value);
  };

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <ul>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
              <button onClick={() => editUser(user.id)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UserList;