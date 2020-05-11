import React from "react";
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
/*import Contact from "../visitorSite/contact/Contact.js";
import Admin from "../adminSite/Admin.js";
import HotelList from "../visitorSite/hotelList";
import HotelSpecific from "../visitorSite/hotelSpecific";
import MakeEnquiries from "../visitorSite/makeEnquiries";
import newEstablishment from "../adminSite/newEstablishment";
import viewEnquiries from "../adminSite/viewEnquiries";
import ContactMsg from "../adminSite/contactMsg";*/

// Navigation Menu
function NavMenu() {
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
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link" role="link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link" role="link">
              Contact
            </NavLink>
            <NavLink to="/admin" className="nav-link" role="link">
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navigation showing correct component */}
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          {/*<Route path="/contact" component={Contact} /> */}
          {/*<Route path="/admin" component={Admin} /> */}
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
