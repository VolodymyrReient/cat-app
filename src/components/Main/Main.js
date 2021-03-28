import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";

import CatItems from "../CatItems/CatItems";
import Preloader from "../Preloader/Preloader";

import "./main.css";

class Main extends Component {
    state = {
        data: [],
        loading: true,
        counter: 1,
        page: 1,
    };
    componentDidMount() {
        fetch(
            `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&page=${this.state.page}`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ data: data, loading: false }));
    }
    handleClick = (event) => {
        this.setState({ page: event.target.textContent });
        fetch(
            `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&page=${this.state.page}`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ data: data, loading: false }));
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div className="content">
                {this.state.loading ? (
                    <Preloader />
                ) : (
                    <CatItems key={this.state.data.id} data={this.state.data} />
                )}
                <Pagination count={3} onChange={this.handleClick} className="pagination"/>
            </div>
        );
    }
}

export default Main;
