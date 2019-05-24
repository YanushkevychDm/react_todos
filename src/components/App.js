import React, {Component} from 'react';
// import AddTodos from './addTodos';
// import TodoList from './todoList';

class App extends Component {

  state = {
    todos: [
      'Buy some Old Toby',
      'Go on an Adventure',
      'Don\'t forget the handkerchief and pipe',
    ],
    inputText: '',
  }

  deleteHandler = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  onChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  }

  addNewHandler = () => {
    const todos = [...this.state.todos];
    todos.push(this.state.inputText);
    this.setState({ todos: todos, inputText: '' });
  }

  onClickHandler = (index) => {
    console.log(`Task #${index + 1} was clicked`);
  }


  render() {

    return (
      <div className='main-container'>
        <h1>Hobbit Todos</h1>
        <div className="task-wrap">
          <h2>Add New Task</h2>
          <div className='input-wrap'>
            <input type="text" onChange={this.onChangeHandler} placeholder='New Task' value={this.state.inputText}/>
            <button className='btn' onClick={this.addNewHandler}>Add</button>
          </div>
        </div>
        <h2 className='task-list'> Task list: </h2>
        <ul className='list'>
          <li className='list-item'> <span>Done</span>  <span className='item'>Task</span> <span>Delete</span> </li>
          { this.state.todos.map((todo, index) => 
            <li className='list-item' key={todo}  onClick={() => this.onClickHandler(index)  }>
              <label className="container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className='text'>{index+1}. {todo} </span> 
              </label> 
              <button className='btn' onClick={() => this.deleteHandler(index)}>Delete</button>
            </li>
          ) } 
        </ul>
      </div>
    );
  }
}

export default App;


{/* <div className='checkbox-wrap'>
<input type="checkbox" name="" id=""  className='done'/>
<span className='item'>{index+1}. {todo}</span> 
</div> */}