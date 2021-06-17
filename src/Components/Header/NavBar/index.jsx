import React from "react";
import { useState } from "react";
import {
  Link
} from "react-router-dom";
import Logo from "../../Logo";
import SearchBar from "../SearchBar";
import './style.css';
import Menu from "../../Menu";
import Icon from '../../../Components/Icon'; 

function NavBar({ navItems }) {

  const [category, showCategory] = useState(false);

  return (
    <div className="topnav">
      <ul className="nav-list">
        <li>
          <Link to="/" className="list-item">
            <Icon name="AppLogo" iconClass="app-logo"/>
          </Link>
          </li>
        <li className="dog-categories list-item">
          Shop for Dog
        <Menu name="Dog" categories={["Food", "Accessories", "Toys", "Grooming"]}/>
        </li>
        <li className="cat-categories list-item">
          Shop for Cat
          <Menu name="Cat" categories={["Food", "Accessories", "Toys", "Grooming", "Utilities"]}/>
        </li>
        <li className="offers list-item">Offers</li>
        <li id="search-panel"> <SearchBar /></li>
      </ul>
    </div>
  );
}

export default NavBar;