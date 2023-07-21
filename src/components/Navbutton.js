import "../styles/Navbutton.css"
import React from "react"; 
import { NavLink } from "react-router-dom"; 

export default function (props) {
    return (
        <NavLink to={props.linkName} className="nav-button">
            <img className="nav-button-image" src={props.image}/>
        </NavLink>
    )
}