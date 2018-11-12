import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Articles extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Alumni Engagement</h2>
                <p className="App-link">
                    <Link to="/">Home bruv!</Link>
                </p>
            </div>
        );
    }
}
