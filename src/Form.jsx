import React, { Component } from "react";

import "./scss/Form.scss";

export default class Form extends Component {
    render() {
        return (
            <form className="form">
                <input type="text" placeholder="GitHub username" className="input"/>
                <button className="button">Search</button>
            </form>
        )
    }
}