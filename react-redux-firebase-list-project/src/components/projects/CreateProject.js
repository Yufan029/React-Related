import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container section create-project">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text lighten-1 center">Create a New Project</h5>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text lighten-1">title</i>
                        <label htmlFor="title">Project Title</label>
                        <input type="text" name="title" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix grey-text lighten-1">drafts</i>
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" name="content" id="content" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo lighten-1 right">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)