import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [item, setItem] = useState('')

    const handleChange = e => {
        setItem(e.target.value)
    }
    
    const addTask = (e) => {
        e.preventDefault()
        const newItem = {
            item: item,
            completed: false,
            id: new Date()

        }
        dispatch({ type: 'ADD_TODO', payload: newItem })
        setItem('')    
        
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <h1>New Task</h1>
                <input type='text' onChange={handleChange} value={item} />
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm; 