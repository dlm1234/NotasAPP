const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) throw new Error('Error al obtener tareas');
  return response.json();
};

export const createTask = async (title) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) throw new Error('Error al crear tarea');
  return response.json();
};

export const updateTask = async (id, completed) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) throw new Error('Error al actualizar tarea');
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar tarea');
  return response.json();
};