import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector(state => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <ul className="list-group">
      {filteredTasks.map(task => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <span 
            onClick={() => dispatch(toggleTask(task.id))}
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {task.text}
          </span>
          <div>
            <span className={`badge ${task.completed ? 'bg-success' : 'bg-warning'} me-2`}>
              {task.completed ? 'Completed' : 'Pending'}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(task.id))}>❌</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
