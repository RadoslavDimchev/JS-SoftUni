import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [values, setValues] = useState({
    title: todo.title
  });
  const { editTodoHanlder, deleteTodoHanlder } = useContext(TodoContext);

  const editSumbitHandler = (e) => {
    e.preventDefault();

    editTodoHanlder(todo, { title: values.title });
    setEditMode(false);
  };

  const changeHanlder = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <li>
      {editMode
        ? <form onSubmit={editSumbitHandler}>
          <input type="text" name='title' value={values.title} onChange={changeHanlder} />
          <input type="submit" value='save' />
        </form>
        : <>
          {todo.title}
          <button onClick={() => setEditMode(true)}>edit</button >
          <button onClick={() => deleteTodoHanlder(todo._id)}>delete</button>
        </>
      }
    </li >
  );
};

export default TodoItem;

