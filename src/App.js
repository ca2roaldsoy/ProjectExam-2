import React from "react";
import "./styles/style.scss";
import "react-multi-carousel/lib/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import NavMenu from "./components/menu/NavMenu";
import {
  AdminContextProvider,
  AdminContext,
} from "./components/context/AdminContext";

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
