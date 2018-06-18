import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom'; // Switch
import Home from './pages/Home';
import Cart from './pages/Cart';

const Navigation = (props) => {
    return <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
        </ul>
    </nav>
}

class App extends Component {
    render() {
        return (


            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
