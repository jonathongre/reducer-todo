import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import Todo from './todo';
import TodoForm from './todoForm';

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED'})

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            <button onClick={clearCompleted} >Clear Completed</button>
            {todos.map(todo => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
        </div>
    );
};
export default TodoList;