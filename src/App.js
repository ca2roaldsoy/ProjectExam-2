import React from "react";
import "react-multi-carousel/lib/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/style.scss";
import NavMenu from "./components/menu/NavMenu";
import { AdminContextProvider } from "./context/AdminContext";
import {acommodations} from "./constants/establishments";

function App() {

  function setLocalStorage() {
    // add the array to local storage
    localStorage.setItem("acommodation", JSON.stringify(acommodations))
  }

  setLocalStorage();

  return (
    <div className="App">
      <AdminContextProvider>
        <NavMenu />
      </AdminContextProvider>
    </div>
  );
}

export default App;
