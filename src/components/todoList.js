import React from 'react';

const TodoList = (props) => {
  return (
     props.todos.map((todo, index) => 
      <li className='list-item' key={todo}>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className='text'>{index+1}. {todo} </span> 
        </label> 
        <button className='btn' onClick={() => props.delete(index)}>Delete</button>
      </li>
    )
  );
}

export default TodoList;

