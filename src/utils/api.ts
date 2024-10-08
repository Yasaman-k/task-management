const BASE_URL = 'http://46.100.46.149:8069';

// Function to get all tasks
export const getAllTasks = async (): Promise<TaskResult> => {
  const response = await fetch(`${BASE_URL}/api/tasks/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }

  const tasks: TaskResult = await response.json();
  return tasks;
};

// Function to create a new task
export const createTask = async (taskData: Omit<TaskType, 'id'>) => {
  const response = await fetch(`${BASE_URL}/api/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error('Failed to add task');
  }

  return await response.json();
};

// Function to delete a task
export const deleteTask = async (taskId: number) => {
  const response = await fetch(`${BASE_URL}/api/task/${taskId}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete task');
  }

  return response;
};

// Function to update a task
export const updateTask = async (taskId: number, taskData: TaskType) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error('Failed to edit task');
  }

  return response;
};

// Function to get a task by id
export const fetchTaskById = async (taskId: number) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get task by id');
  }

  const task = await response.json();
  return task;
};
