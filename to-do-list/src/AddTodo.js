import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        todo : ''
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value,
        })
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        this.props.AddNewTodo(this.state.todo);

        this.setState({
            todo: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.HandleSubmit}>
                <label htmlFor="task-name">Input task</label>
                <input type="text" id="task-name" onChange={this.handleChange} value={this.state.todo}/>
                <button type="submit" className="btn">Submit</button>
            </form>
        );
    }
}

export default AddTodo;