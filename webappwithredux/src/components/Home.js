import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import headpicture from '../header.PNG'
import { connect } from 'react-redux';

class Home extends Component {

    // The component we installed 'react-redux' is the glue layer,
    // we need to import a higher-order component from this library, so
    // we can use that HOC to connect this component with the redux store.

    render() {
        const posts = this.props.posts;
        const cards = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={headpicture} alt="Little Eric with blue cloth" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title ">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>)
            })
        ) : (
                <div className="center">No more posts yet.</div>
            );

        return (
            <div className="home container">
                <h4 className="center">Home</h4>
                {cards}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // the first part of the object is the value you want to show in the component props.
        // the second part is the value from store state.
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);

// get rid of the previous logic to grab data by using axios.
// import { connect } form 'react-redux'
// the return value of connect is hoc, so we include the connect when export the component, like upper code.
// we need to create a function to map the store and the component props.
// pass the function to 'connect' function to create a hoc then wrap the original component.
// At last, we need to modify the code to use the data from component props, which is from redux store state.

// we also need to add some fake data in the initState to use as default data.
