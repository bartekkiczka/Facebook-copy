import React from "react";
import "./Reports.css";

import ProfilePicture from "../../resources/user.png";

class Reports extends React.Component {
  render() {
    return (
      <div class="reports__wrapper">
        <div class="report first">
          <img
            class="profile-picture"
            src={ProfilePicture}
            width="30px"
            height="30px"
          ></img>
          <p>Jan Kowalski</p>
        </div>
        <div class="report middle">
          <img
            class="profile-picture"
            src={ProfilePicture}
            width="30px"
            height="30px"
          ></img>
          <p>Jan Kowalski</p>
        </div>
        <div class="report middle">
          <img
            class="profile-picture"
            src={ProfilePicture}
            width="30px"
            height="30px"
          ></img>
          <p>Jan Kowalski</p>
        </div>
        <div class="report middle">
          <img
            class="profile-picture"
            src={ProfilePicture}
            width="30px"
            height="30px"
          ></img>
          <p>Jan Kowalski</p>
        </div>
        <div class="report middle">
          <img
            class="profile-picture"
            src={ProfilePicture}
            width="30px"
            height="30px"
          ></img>
          <p>Jan Kowalski</p>
        </div>
        <div class="report last">
          <img
            class="profile-picture"
            src={ProfilePicture}
            width="30px"
            height="30px"
          ></img>
          <p>Jan Kowalski</p>
        </div>
      </div>
    );
  }
}

export default Reports;
