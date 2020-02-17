import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './Home';
//import Signup from '../../Pages/Sample';
import Portfolio from './Portfolio'
import Resume from './Resume'
import Tech_Page from './Tech_Page'
import About_Page from './About_Page'

const Main = () => {
    return (
        <HashRouter basename="/">
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Portfolio/" component={Portfolio} />
                <Route exact path="/Technologies/" component={Tech_Page} />
                <Route exact path="/Resume/" component={Resume} />
                <Route exact path="/About/" component={About_Page} />
                <Route exact path="/test"/>
            </div>
        </HashRouter>
    )
}

export default Main;