import "./style.css";

function Header(props) {
    return (
        <div className="header">
            <h1>{props.value}</h1>
        </div>
    )
}

export default Header;
