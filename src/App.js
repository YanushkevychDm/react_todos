import React, {Component} from 'react';
import AddTodos from './addTodos';
import TodoList from './todoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, task: 'Create my first React app'},
        {id: 2, task: 'Rendering Arrays in React'},
        {id: 3, task: 'Manage React State with Arrays'},
        {id: 4, task: 'Добавить новую задачу из приложения'},
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <AddTodos />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}


export default App;
