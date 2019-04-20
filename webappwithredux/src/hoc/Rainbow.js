import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'yellow', 'black', 'orange', 'pink', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';
    //console.log(className);

    // pass the props info from the wrapper to the wrapped component, which includes all the router info for the wrapped component to use.
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;