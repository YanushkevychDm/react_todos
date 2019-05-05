import React, {Component} from 'react';

class TodoList extends Component {
  render() {

    return (
      <div className="todoList">
        <h2 className="center">Список дел</h2>
        <ul className="list">
          {this.props.todos.map(
            (item) => <li className="list-item" key={item.id}>{item.task} <button className="btn-remove">-</button></li> 
          )}
        </ul> 
      </div>
    );
  }
}

export default TodoList;

