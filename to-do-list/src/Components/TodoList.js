import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import Footer from './Footer';

function TodoList() {

    // This is a hook that allows us to add state to functional components.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) { // If there are todos saved in localStorage, we retrieve them.
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // userEffect is a hook that allows us to perform side effects in a functional component.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // This is a function that allows us to add a todo to the list.
  const addTodo = (task) => {
    setTodos([...todos, task]); // We use the spread operator to add the new task to the list.
  };

  // Count the number of tasks done.
  const [tasksDoneCount, setTasksDoneCount] = useState(0);

  // Remove a task from the list of tasks.
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setTasksDoneCount(tasksDoneCount + 1);
};
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} task={todo} removeTodo={() => removeTodo(index)} />
        ))}
      </ul>
        <p><b>{tasksDoneCount}</b> tâche(s) terminée(s)</p>
      <Footer />
    </div>
  );
}
export default TodoList;
