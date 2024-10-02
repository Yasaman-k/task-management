import { createSlice } from '@reduxjs/toolkit';

const initialState: TaskType[] = []; // Initial state is an empty array

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export const selectAllTasks = (state: any) => state.tasks;

export default taskSlice.reducer;
