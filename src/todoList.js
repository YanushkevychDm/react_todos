import React from 'react';

const TodoList = (props) => {
  return (
    <div className="todoList">
      <h2 className="center">Список дел</h2>
      <ul className="list">
        {props.todos.map(
          (item) => <li className="list-item" key={item.id}>{item.task}
           <button className="btn-remove" onClick={props.delete}>-</button>
          </li> 
        )}
      </ul> 
    </div>
  );
}

export default TodoList;

