import React, { useState, createContext } from "react";

const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function registerUser(username) {
    localStorage.setItem("user", JSON.stringify(username));

    setUser(username);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AdminContext.Provider value={{ user, registerUser, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminContextProvider };
