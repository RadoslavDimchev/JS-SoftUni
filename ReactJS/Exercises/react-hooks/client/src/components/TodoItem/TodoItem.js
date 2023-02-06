import { useContext, useState } from "react";

import { TodoContext } from "../../contexts/TodoContext";
import styles from "./TodoItem.module.css";
import '../../App.css';

const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [values, setValues] = useState({
    title: todo.title
  });
  const { editTodoHanlder, deleteTodoHanlder, markTodoHanlder } = useContext(TodoContext);

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
          <span style={{ textDecoration: todo.isMarked ? 'line-through' : '' }} >
            {todo.title}
          </span>
          <button className={`btn ${styles['edit-btn']}`} onClick={() => setEditMode(true)}>edit</button >
          <button className={`btn ${styles['delete-btn']}`} onClick={() => deleteTodoHanlder(todo._id)}>delete</button>
          <button className={`btn ${styles['mark-btn']}`} onClick={() => markTodoHanlder(todo)}>mark</button>
        </>
      }
    </li >
  );
};

export default TodoItem;

