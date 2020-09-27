import React from "react";
import "./MainIcons.css";

import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import OnDemandVideo from "@material-ui/icons/OndemandVideo";
import GamesIcon from "@material-ui/icons/Games";

class MainIcons extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="home">
          <HomeIcon style={{ fontSize: 40 }} />
        </div>
        <div class="main-icon">
          <GroupIcon style={{ fontSize: 40 }} />
        </div>
        <div class="main-icon">
          <OnDemandVideo style={{ fontSize: 40 }} />
        </div>
        <div class="main-icon">
          <GroupIcon style={{ fontSize: 40 }} />
        </div>
        <div class="main-icon">
          <GamesIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    );
  }
}

export default MainIcons;
