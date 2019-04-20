import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import headpicture from '../header.PNG'

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data.slice(0, 10)
                })
            })
    }

    render() {
        const posts = this.state.posts;
        const cards = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={headpicture} alt="Eric's picture" />
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

export default Home;