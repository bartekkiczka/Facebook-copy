import React from "react";
import "./Header.css";

import MainIcons from "./main icons/MainIcons.js";
import SearchBar from "./search bar/SearchBar.js";
import SideIcons from "./side icons/SideIcons.js";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="content">
          <div id="search-bar">
            <SearchBar />
          </div>
          <div id="main-icons">
            <MainIcons />
          </div>
          <div id="side-icons">
            <SideIcons />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
