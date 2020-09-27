import React from "react"
import "./RightPanel.css"

import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ProfilePicture from "../resources/user.png";

class RightPanel extends React.Component {
    render() {
        return (
            <div class="right-panel__wrapper">
                <div class="right-panel-description__wrapper">
                    <p>Kontakty</p>
                    <span>
                        <VideoCallIcon style={{ margin: "0 5px 0 0" }} />
                        <SearchIcon style={{ margin: "0 5px 0 0" }} />
                        <MoreHorizIcon />
                    </span>
                </div>
                <div class="right-panel-friends__wrapper">
                    <div class="right-panel-friend">
                        <span>
                            <img src={ProfilePicture}></img>
                            <p>Jan Kowalski</p>
                        </span>
                    </div>
                    <div class="right-panel-friend">
                        <span>
                            <img src={ProfilePicture}></img>
                            <p>Jan Kowalski</p>
                        </span>
                    </div>
                    <div class="right-panel-friend">
                        <span>
                            <img src={ProfilePicture}></img>
                            <p>Jan Kowalski</p>
                        </span>
                    </div>
                    <div class="right-panel-friend">
                        <span>
                            <img src={ProfilePicture}></img>
                            <p>Jan Kowalski</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightPanel;