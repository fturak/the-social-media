import "../styles/Header.css"
import Logo from "../assets/penrose-icon.png"

export default function ()  {
    return (
        <div className= "header">
            <img src = {Logo} className="header-logo"/>
        </div>
    )
}