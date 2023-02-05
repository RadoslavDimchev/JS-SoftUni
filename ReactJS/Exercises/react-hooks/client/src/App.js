import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodosList from "./components/TodosList/TodosList";
import { TodoContext } from "./contexts/TodoContext";
import useFetch from "./hooks/useFetch";
import useTodoApi from "./hooks/useTodoApi";

function App() {
  const [todos, setTodos, isLoading] = useFetch('http://localhost:3030/jsonstore/todos');
  const { createTodo, editTodo, deleteTodo } = useTodoApi();

  const createTodoHandler = async (todoData) => {
    try {
      const todo = await createTodo(todoData);
      setTodos(state => [
        ...state,
        todo
      ]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const editTodoHanlder = async (todoData, editedTodoData) => {
    try {
      const editedTodo = await editTodo({ ...todoData, ...editedTodoData });
      setTodos(state => state.map(t => t._id !== editedTodo._id ? t : editedTodo));
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodoHanlder = async (todoId) => {
    try {
      await deleteTodo(todoId);
      setTodos(state => [
        ...state.filter(t => t._id !== todoId)
      ]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, editTodoHanlder, deleteTodoHanlder }}>
      <div className="App">
        <h1>TODO APP</h1>

        {isLoading
          ? <span>Loading...</span>
          : <TodosList />
        }

        <CreateTodo createTodoHandler={createTodoHandler} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
