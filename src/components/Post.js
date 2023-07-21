import "../styles/Post.css"
import ProfileIcon from "../assets/default-profile-icon.png"
import UpVoteIcon from "../assets/upvote-icon.png"
import Usernames from "../data/usernames"
import { useEffect, useState } from "react"

export default function () {

    const [username, setUsername] = useState(Usernames[Math.floor(Math.random()*Usernames.length)])
    const [userImage, setUserImage] = useState("https://picsum.photos/128/128?random=" + (Math.floor(Math.random() * 100))) //Need random due to duplicate requests printing same due to cache without
    const [message, setMessage] = useState({}) //What the post says in text
    const [upvotes, setUpvotes] = useState({
        amount: Math.floor(Math.random() * 100), //random amount of votes
        userVote: false
    });

    //Random images from all files in post-images folder
    const images = require.context('../assets/post-images', true);
    const imageList = images.keys().map(image => images(image));
    const [image, setImage] = useState();

    function upvote () {
        const newAmountValue = upvotes.userVote ? upvotes.amount - 1 : upvotes.amount + 1;
        setUpvotes({
          ...upvotes,
          amount: newAmountValue,
          userVote: !upvotes.userVote
        });
    }

    const getApiData = () => {
        //message
        fetch('https://api.adviceslip.com/advice?t=' + Math.random())
        .then(response => {
          return response.json()
        })
        .then(data => {
          setMessage(data.slip)
        })
      };

      const handleImage = () => {
        (Math.random() < 0.25) && setImage(imageList[Math.floor(Math.random()*imageList.length)])
      }

    //randomize the images to posts only on first render of stream
    useEffect(() => {
        handleImage()
         getApiData()
    },[]);


    return (
        <div className ="post">
            <img className="post-profile-image" src={userImage}/>
            <div className="right-block">
                <h3 className="post-profile-name">{username}</h3>
                <p className="post-text">{message.advice}</p>
                <img src={image} className="post-image"/>
                <div className="right-bottom-block">
                    <p className="post-time">5 minutes ago</p>
                    <div className="upvotes">
                    <img 
                        src={UpVoteIcon} 
                        className="upvote-icon" 
                        onClick={upvote}
                        style={upvotes.userVote ? {opacity:"100%"} : {opacity: "60%"}}
                        onMouseOver={e => {e.target.style.opacity = "20%"}}
                        onMouseLeave={e => {upvotes.userVote ? e.target.style.opacity = "100%" : e.target.style.opacity = "60%"}}
                    />
                    <p className="upvote-amount">{upvotes.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}