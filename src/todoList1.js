import React from 'react';

const TodoList1 = (props) => {
  return (
    <ol>
      {props.todos.map(
        (item) => <li key={item.id}>{item.task}</li>
      )}
    </ol> 
  );
  
}

export default TodoList1;

