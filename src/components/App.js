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
    ]
  }
 
  render() {
    return (
      <div>
        { this.state.todos.map((todo, index) => 
          <p key={index}>{todo}</p>
        ) } 
      </div>
    );
  }
}


export default App;
