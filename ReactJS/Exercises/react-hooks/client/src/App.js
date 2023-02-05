import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodosList from "./components/TodosList/TodosList";
import { TodoContext } from "./contexts/TodoContext";
import useFetch from "./hooks/useFetch";

function App() {
  const [todos, setTodos, isLoading] = useFetch('http://localhost:3030/jsonstore/todos');

  return (
    <TodoContext.Provider value={{ todos }}>
      <div className="App">
        <h1>TODO APP</h1>

        {isLoading
          ? <span>Loading...</span>
          : <TodosList />
        }

        <CreateTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
