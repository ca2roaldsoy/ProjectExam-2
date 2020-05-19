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
import Admin from "../adminSite/admin/Admin.js";
import { AdminContext } from "../adminSite/context/AdminContext";
/*import HotelList from "../visitorSite/hotelList";
import HotelSpecific from "../visitorSite/hotelSpecific";
import MakeEnquiries from "../visitorSite/makeEnquiries";
import newEstablishment from "../adminSite/newEstablishment";
import viewEnquiries from "../adminSite/viewEnquiries";
import ContactMsg from "../adminSite/contactMsg";*/
import Login from "../visitorSite/login/Login";
import LogOut from "../adminSite/logout/LogOut";
import Enquiries from "../visitorSite/makeEnquiries/Enquiries.js";
import Establishment from "../visitorSite/establishment/Establishment.js";
import EstablishmentDetails from "../visitorSite/establishment/EstablishmentDetail.js";

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
          <Route path="/admin" component={Admin} />
          <Route path="/make-enquiries" component={Enquiries} />
          <Route path="/establishment/:id" component={EstablishmentDetails} />
          <Route path="/establishment/" component={Establishment} />
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
