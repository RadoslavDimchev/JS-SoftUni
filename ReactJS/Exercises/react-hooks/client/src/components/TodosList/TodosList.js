import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

const TodosList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      {todos.length > 0
        ? <ul>{todos.map(t => <TodoItem key={t._id} todo={t} />)}</ul>
        : <h2>No todos in the list</h2>}
    </>
  );
};

export default TodosList;