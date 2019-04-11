import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'slushy'}
    ]
  }

  ClickToDelete = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <nav className="nav-wrapper center white">
          <h4>Todo's</h4>
        </nav>
        <Todos todos={this.state.todos} ClickToDelete={this.ClickToDelete}/>
      </div>
    );
  }
}

export default App;
