import React from "react";
import "./MainPanel.css";

import Reports from "./reports/Reports.js";
import CreatePost from "./create post/CreatePost.js";
import Rooms from "./rooms/Rooms.js"
import Post from "./post/Post.js"

class MainPanel extends React.Component {
  render() {
    return (
      <div class="content__wrapper">
        <div class="content-reports__wrapper">
          <Reports />
          <CreatePost />
          <Rooms />
          <Post />
        </div>
      </div>
    );
  }
}

export default MainPanel;
