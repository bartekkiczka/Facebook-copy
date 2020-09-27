import React from "react";
import "./Post.css"

import ProfilePicture from "../../resources/user.png";
import PostPicture from "../../resources/post-image.png"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplyIcon from '@material-ui/icons/Reply';

class Post extends React.Component {
    render() {
        return (
            <div class="post__wrapper">
                <div class="post-info__wrapper">
                    <div class="post-info-profile__wrapper">
                        <img src={ProfilePicture}></img>
                        <span>
                            <p>NBA</p>
                            <p>Wczoraj o 8.49</p>
                        </span>
                    </div>
                    <div class="post-info-description__wrapper">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce hendrerit et lectus in semper. Aliquam erat volutpat.
                            Quisque a est lectus. Fusce lobortis ornare arcu, eu faucibus orci eleifend et
                        </p>
                    </div>
                </div>
                <div class="post-image__wrapper">
                    <img src={PostPicture}></img>
                </div>
                <div class="post-summary__wrapper">
                    <div class="post-summary-reactions__wrapper">
                        <div class="post-summary-reactions-count__wrapper">
                            <span>
                                <ThumbUpAltIcon style={{ color: "blue" }} />
                                <p>243</p>
                            </span>
                        </div>
                        <div class="post-summary-comments-shares__wrapper">
                            <p>654 komentarzy</p>
                            <p>341 udostepnien</p>
                        </div>
                    </div>
                    <div class="post-summary-add-reaction__wrapper">
                        <div class="post-summary-add-reaction-like__wrapper">
                            <span>
                                <ThumbUpAltIcon />
                                <p>Lubie to!</p>
                            </span>
                        </div>
                        <div class="post-summary-add-reaction-comment__wrapper">
                            <span>
                                <ChatBubbleOutlineIcon />
                                <p>Komentarz</p>
                            </span>
                        </div>
                        <div class="post-summary-add-reaction-share__wrapper">
                            <span>
                                <ReplyIcon />
                                <p>Udostepnij</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;