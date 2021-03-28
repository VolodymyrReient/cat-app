import "./card.css";

function CatCard(props) {
    const { description, id, url, wikipedia_url, name } = props;
    return (
        <div className="wrapper" key={id}>
            <div className="img">
                <img src={url} alt={name} />
            </div>
            <div className="name">{name.length === 0 ? "no name" : name}</div>
            <div className="description">
                <p>
                    {description.length === 0
                        ? "read the description on wikipedia"
                        : description}
                </p>
            </div>
            <div className="button">
                <button className="btn waves-light">
                    <a
                        className="blue-text text-darken-2"
                        href={
                            wikipedia_url.length === 0
                                ? "https://en.wikipedia.org/wiki/Cat"
                                : wikipedia_url
                        }
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Wikipedia
                    </a>
                </button>
            </div>
        </div>
    );
}

export default CatCard;
