import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = (props) => {
    //console.log(props);
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quisquam voluptate illo sint cumque, quasi, labore aspernatur, neque nam minus nobis similique est quae omnis saepe. Officiis ipsum provident rem?</p>
        </div>
    )
}

export default Rainbow(About);