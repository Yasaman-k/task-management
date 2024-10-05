import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createTask, deleteTask, fetchTaskById, getAllTasks, updateTask } from '../../utils/api';

// Define the initial state correctly
interface TaskState {
  tasks: TaskType[];
  taskById: TaskType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

// Define the payload type
interface EditTaskPayload {
  id: number;
  task: TaskType;
}

const initialState: TaskState = {
  tasks: [],
  taskById: {
    id: 0,
    title: '',
    description: '',
    completed: false,
  },
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

// Action to delete a  task
export const apiDeleteTask = createAsyncThunk(
  'tasks/apiDeleteTask', // Action type
  async (id: number) => {
    const response = await deleteTask(id); // Assuming addTask is your API function to create a task
    return response; // The response returned by the API
  },
);

// Action to edit a task
export const stateEditTask = createAsyncThunk(
  'tasks/stateEditTask', // Action type
  async ({ id, task }: EditTaskPayload) => {
    const response = await updateTask(id, task); // Assuming addTask is your API function to create a task
    return response; // The response returned by the API
  },
);

// to get task by id
export const stateGetTaskById = createAsyncThunk('tasks/stateGetTaskById', async (id: number) => {
  const task = await fetchTaskById(id); // Make sure this function returns the expected shape
  return task; // Adjust this based on the API response
});

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action: PayloadAction<TaskType>) {
        state.tasks.push(action.payload);
      },
      prepare(title: string, description: string, completed: boolean, id: number) {
        return {
          payload: {
            title,
            description,
            completed,
            id,
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
      .addCase(stateGetTaskById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.taskById = action.payload;
      })
      .addCase(addNewTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
        state.tasks.push(action.payload);
      })
      .addCase(stateEditTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = { ...state.tasks[index], ...action.payload };
        }
      })
      .addCase(apiDeleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

// get all tasks
export const selectAllTasks = (state: any) => state.tasks;

export const selectTaskById = (state: any) => state.tasks.taskById;

export const { taskAdded } = taskSlice.actions;

export default taskSlice.reducer;
