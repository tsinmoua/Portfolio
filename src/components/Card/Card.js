import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.src}
                className="card-img-top d-block w-100"
                alt={props.alt} />
            <div className="card-body">
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.description}
                </p>
                <a href={props.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn app-button btn-dark">
                    App
                </a>
                <a href={props.href2}
                    target="_blank"
                    rel="noreferrer">
                    <input
                        type="button"
                        className="github-button btn btn-dark"
                        value="GitHub" />
                </a>
            </div>
        </div>
    )
}

export default Card;
