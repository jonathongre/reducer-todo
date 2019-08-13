import React from 'react';
import moment from 'moment';

const Todo = ({todo, dispatch }) => {
    const toggle = () => dispatch({type: "TOGGLE_TODO", payload: todo.id})
    const formattedTime = moment().format()
    console.log(todo)
    return (
        <div onClick={toggle} className={todo.completed ? 'completed' : 'incomplete'}>
            <p>Created: {moment().to(todo.id)}</p>
            <h2>{todo.item}</h2>
            <p className={todo.dueAt <= formattedTime ? "due" : ""}>
            Due: {moment().to(todo.dueAt)}
            </p>
        </div>
    );
};

export default Todo;