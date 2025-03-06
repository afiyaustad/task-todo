import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;



