import React from 'react'

const Todos = ({ todos, ClickToDelete }) => {
    let todoList;
    if (todos.length !== 0) {
        todoList = todos.map(todo => {
            return (
                <div
                    className="collection-item center"
                    key={todo.id}
                    onClick={() => ClickToDelete(todo.id)}
                >
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

export default Todos;