import React from "react";
import "./SideIcons.css";

import ProfilePicture from "../../resources/user.png";

class SideIcons extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="user">
          <span id="user-info">
            <img
              id="user-image"
              src={ProfilePicture}
              width="30px"
              height="30px"
            ></img>
            <p>Bartek</p>
          </span>
        </div>
        <div class="side-icon"></div>
        <div class="side-icon"></div>
        <div class="side-icon"></div>
        <div class="side-icon"></div>
      </div>
    );
  }
}

export default SideIcons;
