import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../visitorSite/home/Home.js";
import Contact from "../visitorSite/contact/Contact.js";
import MakeEnquiries from "../visitorSite/makeEnquiries/MakeEnquiries.js";
import Establishment from "../visitorSite/establishment/Establishment.js";
import EstablishmentDetails from "../visitorSite/establishment/EstablishmentDetail.js";
import Admin from "../adminSite/admin/Admin.js";
import NewEstablishment from "../adminSite/newEstablishment/NewEstablishment";
import Login from "../visitorSite/login/Login";
import Enquiries from "../adminSite/enquiries/Enquiries";
import ContactMsg from "../adminSite/contactMsg/Messages";
import LogOut from "../adminSite/logout/LogOut";
import { AdminContext } from "../context/AdminContext";
import Protect from "./Protect";
import ManageEnquiries from "../adminSite/enquiries/ManageEnquiries";

function NavMenu() {
  const { user } = useContext(AdminContext);

  return (
    <Router>
      <Navbar role="navigation" expand="md">
        <Navbar.Brand>
          <NavLink to="/" exact role="link">
            Holidaze
          </NavLink>
        </Navbar.Brand>

        {/* hamburger menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/*check if user exist in local storage*/}
            {!user ? (
              <>
                <NavLink to="/" exact className="nav-link" role="link">
                  Home
                </NavLink>
                <NavLink to="/contact" className="nav-link" role="link">
                  Contact
                </NavLink>
                <Login />
              </>
            ) : (
              <LogOut />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navigation showing correct component */}
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/makeEnquiries/:name/:id" component={MakeEnquiries} />
          <Route path="/establishment/:id" component={EstablishmentDetails} />
          <Route path="/establishment/" component={Establishment} />
          <Protect path="/admin" component={Admin} />
          <Protect path="/newEstablishment/" component={NewEstablishment} />
          <Protect path="/enquiries/" component={Enquiries} />
          <Protect path="/manageEnquiries/:id" component={ManageEnquiries} />
          <Protect path="/messages/" component={ContactMsg} />
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
