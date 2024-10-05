import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/tasksSlice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
