const BASE_URL = 'http://46.100.46.149:8069';

// Function to get all tasks
export const getAllTasks = async () => {
  const response = await fetch(`${BASE_URL}/api/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get all tasks');
  }

  return await response.json();
};

// Function to create a new task
export const createTask = async (taskData: TaskType) => {
  const response = await fetch(`${BASE_URL}/api/tasks`, {
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
  const response = await fetch(`${BASE_URL}/${taskId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete task');
  }

  return await response.json();
};

// Function to update a task
export const updateTask = async (taskId: number, taskData: TaskType) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error('Failed to edit task');
  }

  return await response.json();
};
