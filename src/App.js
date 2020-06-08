import React from "react";
import "react-multi-carousel/lib/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/style.scss";
import NavMenu from "./components/menu/NavMenu";
import { AdminContextProvider } from "./context/AdminContext";

function App() {
  return (
    <div className="App">
      <AdminContextProvider>
        <NavMenu />
      </AdminContextProvider>
    </div>
  );
}

export default App;
