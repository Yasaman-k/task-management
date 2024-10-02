import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/taskSlice';
import counterSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterSlice,
  },
});
