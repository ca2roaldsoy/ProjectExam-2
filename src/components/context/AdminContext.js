import React, { useState, createContext } from "react";

const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState("null");

  function localStoreUser(user) {
    localStorage.setItem("user", user);

    setUser(user);
  }

  function logout() {
    setUser("null");
    //localStorage.removeItem("user");
  }

  return (
    <AdminContext.Provider value={{ user, localStoreUser, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminContextProvider };
