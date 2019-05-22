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

  render() {
    return (
      <div className='container'>
        <h1>Hobbit Todos</h1>
        <div className="task-wrap">
          <h2>Add New Task</h2>
          <div>
            <input type="text" onChange={this.onChangeHandler} placeholder='New Task' value={this.state.inputText}/>
            <button className='btn' onClick={this.addNewHandler}>Add</button>
          </div>
        </div>
        <h2>Task list:</h2>
        <ul className='list'>
          { this.state.todos.map((todo, index) => 
            <li className='list-item' key={todo}>
              <span className='item'>{index+1}. {todo}</span> 
              <button className='btn' onClick={() => this.deleteHandler(index)}>Delete</button>
            </li>
          ) } 
        </ul>
      </div>
    );
  }
}

export default App;