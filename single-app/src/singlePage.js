import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class IndexContainer extends Component {
    render() {
        return (
            <div>
                <h1>Simple SAP</h1>
                <ul>
                    <li>李白</li>
                    <li>杜甫</li>
                    <li>李商隐</li>
                </ul>
            </div>
        )
    }
}

export default IndexContainer;