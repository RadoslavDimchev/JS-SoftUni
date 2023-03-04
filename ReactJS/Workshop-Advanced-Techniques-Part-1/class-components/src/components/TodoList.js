import { Component } from "react";
import { TodoContext } from "../contexts/TodoContext";
import withRouter from "../hoc/withRouter";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { title: 'ToDo 1', isCompleted: false },
        { title: 'ToDo 2', isCompleted: false },
        { title: 'ToDo 3', isCompleted: false },
      ],
      newTodo: '',
      character: {}
    }

    this.newTodoChangeHandler = this.newTodoChangeHandler.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/3')
      .then(res => res.json())
      .then(result => {
        this.setState({ character: result })
      });
  }

  componentDidUpdate() {
    // console.log('update');
  }

  newTodoChangeHandler(e) {
    this.setState({ newTodo: e.target.value });
  }

  addNewTodoHandler(e) {
    e.preventDefault();

    this.setState((state, props) => ({
      todos: [...state.todos, { title: state.newTodo, isCompleted: false }],
      newTodo: ''
    }));
  }

  todoClickHandler(todoTitle) {
    this.setState(state => ({
      todos: state.todos.map(todo => todo.title === todoTitle ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    }));
  }

  todoDeleteHandler(e, todoTitle) {
    e.stopPropagation();

    this.setState(state => ({
      todos: [...state.todos.filter(todo => todo.title !== todoTitle)]
    }));
  }

  render() {
    // this.forceUpdate();
    return (
      <TodoContext.Provider value={{ todoDeleteHandler: this.todoDeleteHandler.bind(this) }} >
        <h2>Caracter: {this.state.character.name}</h2>
        <ul>
          {this.state.todos.map(todo =>
            <TodoItem
              key={todo.title}
              todo={todo}
              onClick={this.todoClickHandler.bind(this)}
            />
          )}
        </ul>

        <form onSubmit={this.addNewTodoHandler.bind(this)} >
          <label htmlFor="new-todo"></label>
          <input
            type="text"
            id="new-todo"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.newTodoChangeHandler}
          />
          <input type="submit" value="Add" />
        </form>
      </TodoContext.Provider>
    );
  }
}

export default withRouter(TodoList);