import React from 'react'

class Todos extends React.Component {
    state = {
        ids:''
    }

    HandleClick = (id) => {
        // console.log(e);
        // if (e.target.className.includes('material-icons')) {
        //     console.log(e.target.parentElement.parentElement);
            this.props.ClickToDelete(id);
        //}
        
    }

    render() {
        let todoList;
        const todos = this.props.todos;
        if (todos.length !== 0) {
            todoList = todos.map(todo => {
                return (
                    <div
                        className="collection-item center"
                        key={todo.id}
                        onClick={() => this.HandleClick(todo.id)}
                    >
                        <a href="#" alt="delete"><i className="material-icons primary right">delete_forever</i></a>
                        {todo.content}
                    </div>
                );
            })
        } else {
            todoList = <p className="collection-item center">Add New items!</p>
        }


        return (
            <div className="todos collection">
                {todoList}
            </div>
        );
    }
}

export default Todos;