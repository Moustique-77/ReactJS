import React, { useState } from 'react';

function TodoInput({ addTodo }) {
    // This is a hook that allows us to add state to functional components.
  const [task, setTask] = useState("");

  // This is a function that allows us to add a todo to the list.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Ajoutez une tâche" 
      />
      <button type="submit" className='button-add'>Ajouter</button>
    </form>
  );
}

export default TodoInput;
