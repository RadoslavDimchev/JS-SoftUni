import './App.css';
import { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <h1>ToDo List</h1>
          <TodoList />
        </main>
      </div>
    );
  }
}

export default App;
