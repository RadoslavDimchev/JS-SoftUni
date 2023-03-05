import { createContext, useEffect, useState } from "react";

import * as userService from '../services/userService';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(users => {
        setUsers(users);
        setFilteredUsers(users);
      });
  }, []);

  const addUser = (user) => {
    setUsers(oldUsers => [...oldUsers, user]);
  };

  const filterUsers = (text, criteria = 'all') => {
    if (criteria === 'all') {
      return setFilteredUsers(users);
    }

    setFilteredUsers(users.filter(u => u[criteria].includes(text)));
  };

  return (
    <UserContext.Provider value={{ users: filteredUsers, addUser, filterUsers }} >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;