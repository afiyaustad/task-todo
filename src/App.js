import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterTasks from './components/FilterTasks';

const App = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Redux To-Do List</h2>
      <AddTask />
      <FilterTasks />
      <TaskList />
    </div>
  );
};

export default App;
