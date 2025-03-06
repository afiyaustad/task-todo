import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input 
        type="text" 
        className="form-control"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
