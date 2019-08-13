import React from 'react';
import moment from 'moment';

const Todo = ({todo, dispatch }) => {
    const toggle = () => dispatch({type: "TOGGLE_TODO", payload: todo.id})
    const formattedTime = moment().format()
    return (
        <div onClick={toggle} className={todo.completed ? 'completed' : 'incomplete'}>
            <h2>{todo.item}</h2>
            <p className={todo.dueAt <= formattedTime ? "due" : ""}>
            {moment().to(todo.dueAt)}
            </p>
        </div>
    );
};

export default Todo;