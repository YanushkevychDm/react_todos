import React, {Component} from 'react';
import AddTodos from './addTodos';
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
    if(this.state.inputText) {
      const todos = [...this.state.todos];
      todos.push(this.state.inputText);
      this.setState({ todos: todos, inputText: '' });
    }
  }

  onKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.addNewHandler();
    }
  }

  render() {

    return (
      <div className='main-container'>
        <AddTodos 
          onChange={this.onChangeHandler}
          addNew={this.addNewHandler}
          enter={this.onKeyPress}
          input={this.state.inputText} />

        <h2 className='task-list'> Task list: </h2>
        <ul className='list'>
          <li className='list-item'> <span>Done</span>  <span className='item'>Task</span> <span>Delete</span> </li>
          { this.state.todos.map((todo, index) => 
            <li className='list-item' key={todo}>
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