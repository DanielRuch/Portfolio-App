import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './Home';
//import Signup from '../../Pages/Sample';
import Portfolio from './Portfolio'

const Main = () => {
    return (
        <HashRouter basename="/Portfolio-App">
            <div>
                <Route exact path="/Home" component={Home} />
                <Route path="/Portfolio" component={Portfolio} />
            </div>
        </HashRouter>
    )
}

export default Main;