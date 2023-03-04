import { Component } from "react";
import { TodoContext } from "../contexts/TodoContext";
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const className = this.props.todo.isCompleted ? styles.completed : '';

    return (
      <TodoContext.Consumer>
        {context =>
          <li
            className={className}
            onClick={() => this.props.onClick(this.props.todo.title)}
          >
            {this.props.todo.title}
            <button
              onClick={(e) => context.todoDeleteHandler(e, this.props.todo.title)}
            >
              X
            </button>
          </li>}
      </TodoContext.Consumer>
    );
  }
}

export default TodoItem;