import React from "react";
import "./SearchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Facebook from "../../resources/facebook.png";

class SearchBar extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="logo">
          <img src={Facebook} width="40px"></img>
        </div>
        <div id="search">
          <input type="text" placeholder="Szukaj na Facebooku"></input>
        </div>
      </div>
    );
  }
}

export default SearchBar;
