import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error al cargar tareas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    try {
      const newTask = await createTask(title);
      setTasks([newTask, ...tasks]);
    } catch (error) {
      console.error('Error al crear tarea:', error);
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      const updatedTask = await updateTask(id, completed);
      setTasks(tasks.map(task => 
        task._id === id ? updatedTask : task
      ));
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
    }
  };

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="App">
      <header>
        <h1>📝 Lista de Tareas Simple</h1>
      </header>
      <main>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList 
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;