import React, { Component , useState } from 'react';
import NavBarMain from './Resources/Components/navBarMain'
//import Main from './Resources/Components/Main'
import Main from './Pages/Main'


class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        
        return (
            <div>
                <NavBarMain />
                <Main />
            </div>
        );
    }
}


export default App;