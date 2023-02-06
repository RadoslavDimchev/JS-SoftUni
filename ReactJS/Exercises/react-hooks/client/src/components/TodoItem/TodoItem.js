import { useContext, useEffect, useState } from "react";

import { TodoContext } from "../../contexts/TodoContext";
import styles from "./TodoItem.module.css";
import '../../App.css';
import useChangeHanlder from "../../hooks/useChangeHanlder";

const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const { values, changeHanlder } = useChangeHanlder({
    title: todo.title
  });
  const { editTodoHanlder, deleteTodoHanlder, markTodoHanlder } = useContext(TodoContext);

  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('unmount');
    };
  });

  const editSumbitHandler = (e) => {
    e.preventDefault();

    editTodoHanlder(todo, { title: values.title });
    setEditMode(false);
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

