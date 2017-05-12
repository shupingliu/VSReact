﻿import React, { Component } from 'react';
//import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


export default class Root extends Component {
    render() {
        return (
            <Router>
                {this.props.routes()}
            </Router>
        );
    }
}