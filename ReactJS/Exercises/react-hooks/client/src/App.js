import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodosList from "./components/TodosList/TodosList";
import { TodoContext } from "./contexts/TodoContext";

function App() {
  return (
    <TodoContext.Provider value={{ todos: [] }}>
      <div className="App">
        <h1>TODO APP</h1>

        <TodosList />

        <CreateTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
