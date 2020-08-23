import React, { Component } from "react";
import axios from "axios";

import "./scss/Form.scss";

export default class Form extends Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: ''});
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <input 
                    type="text" 
                    placeholder="GitHub username" 
                    value={this.state.userName} 
                    onChange={event => this.setState({ userName: event.target.value })}
                    className="input" required />
                <button className="button">Search</button>
            </form>
        )
    }
}