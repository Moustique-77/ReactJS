import React from 'react';

// This is a functional component that allows us to display a todo. 
//It takes two props: task and removeTodo.
function TodoItem({ task, removeTodo }) {
  return (
    <li>
      {task}
      <button onClick={removeTodo} className='button-delete'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Ok"><path fill="#34a853" d="M53.7 20.523 28.455 50.815a1 1 0 0 1-1.438.1L10.523 36.073a1 1 0 0 1-.062-1.426l5.379-5.758a1 1 0 0 1 1.388-.071l9.194 8.018L47.166 13.26a1 1 0 0 1 1.516.017l5.018 5.962a1 1 0 0 1 0 1.284Z" data-name="Check Mark" class="color222222 svgShape"/>
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
