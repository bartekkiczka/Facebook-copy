import React from "react"
import "./Rooms.css"

import VideoCallIcon from '@material-ui/icons/VideoCall';
import ProfilePicture from "../../resources/user.png";

class Rooms extends React.Component {
    render() {
        return (
            <div class="rooms-wrapper">
                <div class="info-text__wrapper">
                    <div class="info-text-rooms__wrapper">
                        <span id="video-call-info">
                            <VideoCallIcon style={{ color: "purple" }} />
                            <p>Pokoje-Czat wideo ze znajomymi</p>
                        </span>
                        <p id="create-room-text">Utworz pokoj</p>
                    </div>
                </div>
                <div class="profile-pictures__wrapper">
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                    <img src={ProfilePicture}></img>
                </div>
            </div >
        )
    }
}

export default Rooms;