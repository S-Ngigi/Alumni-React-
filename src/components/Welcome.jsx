import React, {Component} from 'react'
import {Link} from "react-router-dom";
import logo from '../logo.svg';
// import '../App.css'

export default class Welcome extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} alt="logo" className="App-logo"/>
                    <p>Edit <code>src/components/Welcome.jsx</code> and save to reload</p>
                    <a href="https://reactjs.org" className="App-link" target="blank" rel="noopener noreferrer">
                    Learn React
                    </a>
                   <p>
                        <Link to="/articles" className="App-link">
                        Articles
                        </Link>
                   </p>
                </header>
            </div>
        );
    }
}