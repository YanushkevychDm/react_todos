import React, {Component} from 'react';
import AddTodos from './addTodos';
import TodoList from './todoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {id: 6, task: 'test tsest'},
      todos: [
        {id: 1, task: 'Create my first React app'},
        {id: 2, task: 'Rendering Arrays in React'},
        {id: 3, task: 'Manage React State with Arrays'},
        {id: 4, task: 'Добавить новую задачу из приложения'},
      ]
    };
  }


  onClearAll = () => {
    this.setState({todos: [] });
  };

  onAddItem = () => {
    this.setState(state => {
      const todos = state.todos.concat(state.value);
      const randomNum = Math.random();

      return{
        todos,
        value: {id: randomNum, task: randomNum},
      };
    });
  };



  render() {
    return (
      <div className="app">
        <AddTodos />
        <TodoList todos={this.state.todos} />
        <div className="test-wrap">
          <button onClick={this.onAddItem} className="test-btn">test test</button>
          <button onClick={this.onClearAll} className="test-btn">Очистить</button>
        </div>
      </div>
    );
  }
}


export default App;
