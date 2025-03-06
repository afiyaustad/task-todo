import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

const FilterTasks = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasks.filter);

  return (
    <div className="btn-group mb-3">
      {['All', 'Completed', 'Pending'].map(f => (
        <button 
          key={f} 
          className={`btn ${filter === f ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => dispatch(setFilter(f))}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterTasks;

