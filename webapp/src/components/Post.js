import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        const id = this.props.match.params.post_id;
        console.log(id);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                console.log(response);
                this.setState({
                    post: response.data
                })
            })
    }

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>

        ) : (
            <div className="container center">Please check the network</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        );
    }
}

export default Post;