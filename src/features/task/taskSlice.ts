import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getAllTasks } from '../../utils/api';

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const tasks = await getAllTasks();
  return tasks.results;
});

// Define the initial state correctly
interface TaskState {
  tasks: TaskType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action: PayloadAction<TaskType>) {
        state.tasks.push(action.payload);
      },
      prepare(title: string, description: string) {
        const id = new Date().getTime(); // Generate an ID for the new task
        return {
          payload: {
            id,
            title,
            description,
            completed: false,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskType[]>) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        console.error('failed to fetch tasks', action.error.message);
      });
  },
});

export const selectAllTasks = (state: any) => state.tasks;

export const { taskAdded } = taskSlice.actions;

export default taskSlice.reducer;
