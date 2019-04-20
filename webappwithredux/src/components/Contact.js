import React from 'react';

const Contact = (props) => {
    // programatically reditect
    // these properties in props are added by react router,
    // you can see from the 'App.js', Route tag is not used for the Navbar tag
    // so the Navbar tag doesn't have all these properties.
    setTimeout(() => {props.history.push('./About')}, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quisquam voluptate illo sint cumque, quasi, labore aspernatur, neque nam minus nobis similique est quae omnis saepe. Officiis ipsum provident rem?</p>
        </div>
    )
}

export default Contact;