import styles from './TodoItem.module.css';

export const TodoItem = (props) => {
  let className = 'todo';
  if (props.isCompleted) {
    className += ' is-completed';
  }

  return (
    <tr className={className}>
      <td className={styles.text}>{props.text}</td>
      <td>{props.isCompleted ? 'Complete' : 'Incomplete'}</td>
      <td className="todo-action">
        <button onClick={() => props.onClick(props)} className="btn todo-btn">Change status</button>
      </td>
    </tr>
  );
};