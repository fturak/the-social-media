import "../styles/Navbutton.css"

export default function (props) {
    return (
        <div className="nav-button">
            <img className="nav-button-image" src={props.image}/>
        </div>
    )
}