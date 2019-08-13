import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const TodoForm = ({ dispatch }) => {
    const [item, setItem] = useState({
      item: "",
      dueDate: ""
    });
  
    const handleChange = e => {
      setItem({
        ...item,
        [e.target.name]: e.target.value
      });
    };
  
    const addTask = e => {
      e.preventDefault();
      const newItem = {
        item: item.item,
        completed: false,
        id: new Date(),
        dueAt: moment().format(item.dueDate)
      };
      dispatch({ type: "ADD_TODO", payload: newItem });
      setItem({
        item: "",
        dueDate: ""
      });
    };

    return (
        <div>
            <form className='taskForm' onSubmit={addTask}>
                <h1>Today's Agenda</h1>
                <input type='text' name='item' placeholder='New Task' onChange={handleChange} value={item.item} />
                <h4>To be completed:</h4>
                <input type='date' name='dueDate' onChange={handleChange} value={item.dueDate} />
                <button className='addbtn'>Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm; 