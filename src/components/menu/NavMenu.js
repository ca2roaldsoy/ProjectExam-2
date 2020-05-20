import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "../visitorSite/home/Home.js";
import Contact from "../visitorSite/contact/Contact.js";
import Admin from "../adminSite/admin/Admin.js";
import { AdminContext } from "../context/AdminContext";
import NewEstablishment from "../adminSite/newEstablishment/NewEstablishment";
import ViewEnquiries from "../adminSite/viewEnquiries/ViewEnquiries";
import ContactMsg from "../adminSite/contactMsg/Messages";
import Login from "../visitorSite/login/Login";
import LogOut from "../adminSite/logout/LogOut";
import Enquiries from "../visitorSite/makeEnquiries/Enquiries.js";
import Establishment from "../visitorSite/establishment/Establishment.js";
import EstablishmentDetails from "../visitorSite/establishment/EstablishmentDetail.js";
import Permission from "./Permission.js";

function NavMenu() {
  const { user } = useContext(AdminContext);

  function permission() {
    if (!user) {
      return <Redirect to="/menu" />;
    }
  }

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
          <Route path="/make-enquiries" component={Enquiries} />
          <Route path="/establishment/:id" component={EstablishmentDetails} />
          <Route path="/establishment/" component={Establishment} />
          <Route path="/menu" component={Permission} />
          {user ? (
            <>
              <Route path="/admin" component={Admin} />
              <Route path="/newEstablishment/" component={NewEstablishment} />
              <Route path="/enquiries/" component={ViewEnquiries} />
              <Route path="/messages/" component={ContactMsg} />
            </>
          ) : (
            permission()
          )}
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
