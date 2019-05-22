import React, {Component} from 'react';
// import AddTodos from './addTodos';
// import TodoList from './todoList';

class App extends Component {

  state = {
    todos: [
      { name: 'Создать список заданий', id:'afaefg5'},
      { name: 'Вывести список', id:'wgjlmev56'},
      { name: 'Удалить задание из списка', id:'mbrbj52'},
      { name: 'Создать поле ввода', id:'welgmke526'},
      { name: 'Добавить задание из поля ввода', id:'legiehg52'},
    ]
  }

  deleteHandler = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <ol className='list'>
        { this.state.todos.map((todo, index) => 
          <li className='list-item' key={todo.id} onClick={() => this.deleteHandler(index)} >{todo.name}</li>
        ) } 
      </ol>
    );
  }
}


export default App;
