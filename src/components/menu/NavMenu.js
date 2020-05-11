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
import Admin from "../adminSite/Admin.js";
import HotelList from "../visitorSite/hotelList";
import HotelSpecific from "../visitorSite/hotelSpecific";
import MakeEnquiries from "../visitorSite/makeEnquiries";
import newEstablishment from "../adminSite/newEstablishment";
import viewEnquiries from "../adminSite/viewEnquiries";
import ContactMsg from "../adminSite/contactMsg";

function NavMenu() {
  return <div></div>;
}

export default NavMenu;
