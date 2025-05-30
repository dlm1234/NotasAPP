import React from 'react';

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task._id, !task.completed)}
        className="task-checkbox"
      />
      <span className="task-title">{task.title}</span>
      <button
        onClick={() => onDeleteTask(task._id)}
        className="delete-button"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;