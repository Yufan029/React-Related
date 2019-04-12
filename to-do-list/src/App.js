import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      // {id: 1, content: 'buy milk'},
      // {id: 2, content: 'slushy'}
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

  AddNewTodo = (todo) => {
    let todos = this.state.todos.slice();

    const newTodo = {
      id: Math.random(),
      content: todo,
    };

    todos.push(newTodo);

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <nav className="nav-wrapper center">
          <h4>Todo's</h4>
        </nav>
        <Todos todos={this.state.todos} ClickToDelete={this.ClickToDelete} />
        <br />
        <AddTodo AddNewTodo={this.AddNewTodo}/>
      </div>
    );
  }
}

export default App;
