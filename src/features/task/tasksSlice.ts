import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createTask, getAllTasks } from '../../utils/api';

// Define the initial state correctly
interface TaskState {
  tasks: TaskType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
};

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const tasks = await getAllTasks();
  return tasks.results;
});

// Action to create a new task
export const addNewTask = createAsyncThunk(
  'tasks/addNewTask', // Action type
  async (task: { title: string; description: string; completed: boolean }) => {
    const response = await createTask(task); // Assuming addTask is your API function to create a task
    return response; // The response returned by the API
  },
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action: PayloadAction<TaskType>) {
        state.tasks.push(action.payload);
      },
      prepare(title: string, description: string, completed: boolean) {
        return {
          payload: {
            title,
            description,
            completed,
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
      })
      .addCase(addNewTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
        state.tasks.push(action.payload);
      });
  },
});

// get all tasks
export const selectAllTasks = (state: any) => state.tasks;

export const { taskAdded } = taskSlice.actions;

export default taskSlice.reducer;
