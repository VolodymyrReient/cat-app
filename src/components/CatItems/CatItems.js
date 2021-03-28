import CatCard from "../CatCard/CatCard";

import "./catsItems.css";

function CatItems(props) {
    return (
        <div className="cats">
            {props.data.map((el) => {
                return (
                    <CatCard
                        description={el.breeds.map((item) => {
                            return item.description;
                        })}
                        key={el.id}
                        url={el.url}
                        wikipedia_url={el.breeds.map((item) => {
                            return item.wikipedia_url;
                        })}
                        name={el.breeds.map((item) => {
                            return item.name;
                        })}
                    />
                );
            })}
        </div>
    );
}

export default CatItems;
