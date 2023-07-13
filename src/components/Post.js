import "../styles/Post.css"
import ProfileIcon from "../assets/default-profile-icon.png"
import UpVoteIcon from "../assets/upvote-icon.png"
import ImagePlaceholder from "../assets/default-post-image.jpg"
import { useState } from "react"
export default function () {

    const [image, useImage] = useState(false)

    const displayImage = Math.random() < 0.5;


    return (
        <div className ="post">
            <img className="post-profile-image" src={ProfileIcon}/>
            <div className="right-block">
                <h3 className="post-profile-name">Account Name</h3>
                <p className="post-text">This is the default post message.</p>
                {displayImage ?<img src={ImagePlaceholder} className="post-image"/> : null}
                <div className="right-bottom-block">
                    <p className="post-time">5 minutes ago</p>
                    <div className="upvotes">
                    <img src={UpVoteIcon} className="upvote-icon"/>
                    <p className="upvote-amount">1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}