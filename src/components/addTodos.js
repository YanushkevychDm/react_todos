import React from 'react';

const AddTodos = (props) => {
  return (
    <div>
      <h1>Hobbit Todos</h1>
      <div className="task-wrap">
        <h2>Add New Task</h2>
        <div className='input-wrap'>
          <input type="text" placeholder='New Task'
            onChange={props.onChange} 
            onKeyPress={props.enter}  
            value={props.input}/>
          <button className='btn' onClick={props.addNew}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodos;