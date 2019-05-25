import React from 'react';

const TodoList = (props) => {
  return (
    <div className='wrapper'>
        <h2 className='task-list'> Task list: </h2>
        <ul className='list'>
          <li className='list-item'> <span>Done</span>  <span className='item'>Task</span> <span>Delete</span> </li>
          {props.todos.map( (todo, index) => 
          <li className='list-item' key={todo}>
            <label className="container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className='text'>{index+1}. {todo} </span> 
            </label> 
            <button className='btn btn-big' onClick={() => props.delete(index)}>Delete</button>
            <button className='btn btn-small' onClick={() => props.delete(index)}>X</button>
          </li>
          )}
        </ul>
    </div>
  );
}

export default TodoList;

