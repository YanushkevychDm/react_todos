import React, {Component} from 'react';
// import AddTodos from './addTodos';
// import TodoList from './todoList';

class App extends Component {

  state = {
    todos: [
      'Создать список заданий',
      'Вывести список',
      'Удалить задание из списка',
      'Создать поле ввода', 
      'Добавить задание из поля ввода',
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
        <h2>Добавить новое задание</h2>
        <div>
          <input type="text" onChange={this.onChangeHandler} placeholder='Новое задание' value={this.state.inputText}/>
          <button onClick={this.addNewHandler}>Добавить</button>
        </div>
        <h2>Список дел</h2>
        <ol className='list'>
          { this.state.todos.map((todo, index) => 
            <li className='list-item' key={todo} onClick={() => this.deleteHandler(index)} >{todo}</li>
          ) } 
        </ol>
      </div>
    );
  }
}


export default App;
