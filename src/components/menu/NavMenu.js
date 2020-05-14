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
import Contact from "../visitorSite/contact/Contact.js";
import Admin from "../adminSite/admin/Admin.js";
/*import HotelList from "../visitorSite/hotelList";
import HotelSpecific from "../visitorSite/hotelSpecific";
import MakeEnquiries from "../visitorSite/makeEnquiries";
import newEstablishment from "../adminSite/newEstablishment";
import viewEnquiries from "../adminSite/viewEnquiries";
import ContactMsg from "../adminSite/contactMsg";*/
import Login from "../visitorSite/login/Login";
import Enquiries from "../visitorSite/makeEnquiries/Enquiries.js";

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
          <Nav className="ml-auto">
            <NavLink to="/" exact className="nav-link" role="link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link" role="link">
              Contact
            </NavLink>
            <NavLink to="/enquiries" className="nav-link" role="link">
              Enq
            </NavLink>
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navigation showing correct component */}
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route path="/enquiries" component={Enquiries} />
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
