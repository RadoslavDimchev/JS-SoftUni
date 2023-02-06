import TodoItem from "../TodoItem/TodoItem";

const TodosList = ({ todos }) => {
  return (
    <>
      {todos.length > 0
        ? <ul>{todos.map(t => <TodoItem key={t._id} todo={t} />)}</ul>
        : <h2>No todos in the list</h2>}
    </>
  );
};

export default TodosList;