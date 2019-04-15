import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    // this doesn't work, because "Route" tag is not used for the Navbar tag
    // You can add higher order component to fix this. see below!
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);

    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">brand-logo</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

// we added withRouter to add the extra information from service to client side.
export default withRouter(Navbar);


// higher order component is something
// that wrappers another component and gives it extra powers.

