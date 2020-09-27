import React from "react";
import "./CreatePost.css";

import ProfilePicture from "../../resources/user.png";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

class CreatePost extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="type-field__wrapper">
          <img src={ProfilePicture} width="40px" height="40px"></img>
          <input type="text" placeholder="O czym myslisz Bartek?"></input>
        </div>
        <div class="options__wrapper">
          <span class="option">
            <VideocamIcon style={{ fontSize: 40, color: "red" }} />
            Transmisja video na zywo
          </span>
          <span class="option">
            <PhotoLibraryIcon style={{ fontSize: 40, color: "green" }} />
            Zjdecie/film
          </span>
          <span class="option mood">
            <SentimentVerySatisfiedIcon
              style={{ fontSize: 40, color: "yellow" }}
            />
            Nastroj/aktywnosc
          </span>
        </div>
      </div>
    );
  }
}

export default CreatePost;
