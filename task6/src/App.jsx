import './App.css';

import React, { useState } from 'react';
import TaskItem from './components/taskitem';

const TodoApp = () => {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  
  const addTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    
    setTasks((prevTasks) =>  [...prevTasks, newTask]);
    setNewTask('');
  };
  
  const completeTask = (index) => {
    const completedTask = tasks[index];
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
    setCompletedTasks ((prevCompletedTasks) => [...prevCompletedTasks, completedTask])
  }
  
  const deleteTask = (index, isCompletedTask) => {
    if (isCompletedTask) {
      setCompletedTasks ((prevCompletedTasks) => prevCompletedTasks.filter((_, i) => i !== index));
    } else {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
    }
  };

  console.log('Render TodoApp');

  return (
    <div className="container">
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>

      <ol className="notCompleted">
        <h3>Tasks to be Performed</h3>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onComplete={() => completeTask(index)}
            onDelete={() => deleteTask(index, false)}
          />
        ))}
      </ol>

      <ol className="Completed">
        <h3>Completed Works</h3>
        <ul>
          {completedTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDelete={() => deleteTask(index, true)}
            />
          ))}
        </ul>
      </ol>
      
    </div>
  );
}


export default TodoApp;
