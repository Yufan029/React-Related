import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        // console.log("props == ", this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="btn grey right" onClick={this.handleClick}>Delete Post</button>
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

const mapStateToProp = (state, ownProps) => {
    const id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === +id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})

        // use the action creator to get the action.
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Post);