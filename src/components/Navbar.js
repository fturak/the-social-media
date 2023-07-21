import "../styles/Navbar.css"
import Navbutton from "./Navbutton"
import HomeIcon from "../assets/home-icon.png"
import NotificationIcon from "../assets/notification-icon.png"
import SearchIcon from "../assets/search-icon.png"

export default function () {
    return (
        <div className="navbar">
            <Navbutton linkName="search" image={SearchIcon}/>
            <Navbutton linkName="" image={HomeIcon}/>
            <Navbutton linkName="notifications" image={NotificationIcon}/>
        </div>
    )
}