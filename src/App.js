import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (id) => {
    const newCounters = users.filter((c) => c._id !== id);
    setUsers(newCounters);
  };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user = { ...user };
                    user.isBookmarked = !user.isBookmarked;
                }
                return user;
            })
        );
    };

 if (users.length === 0)
    return <h1 className="badge bg-danger fs-4">никто не тусанёт с тобой</h1>;

  return (
    <>
      <h1 className="badge bg-primary fs-4">
        {users.length} <SearchStatus length={users.length} />
      </h1>
      <Users
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
        users={users}
      />
    </>
  );  
}

export default App;