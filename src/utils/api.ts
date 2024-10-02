const BASE_URL = 'http://46.100.46.149:8069/api/tasks/';

// Function to add a new task
export const addTask = async (taskData) => {
  const response = await fetch(`${BASE_URL}`, {
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
export const deleteTask = async (taskId) => {
  const response = await fetch(`${BASE_URL}/${taskId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete task');
  }

  return await response.json();
};

// Function to edit a task
export const editTask = async (taskId, taskData) => {
  const response = await fetch(`${BASE_URL}/${taskId}`, {
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
