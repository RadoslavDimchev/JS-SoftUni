import styles from './CreateTodo.module.css';
import '../../App.css';
import useChangeHanlder from '../../hooks/useChangeHanlder';

const CreateTodo = ({ createTodoHandler }) => {
  const { values, setValues, changeHanlder } = useChangeHanlder({
    title: ''
  });

  const createSubmitHanldler = (e) => {
    e.preventDefault();
    createTodoHandler({ title: values.title, isMarkerd: false });
    setValues({ title: '' });
  };

  return (
    <form onSubmit={createSubmitHanldler}>
      <input
        type="text"
        name='title'
        placeholder='Write homework'
        value={values.title}
        onChange={changeHanlder}
        className={styles['input-title']}
      />
      <input
        type="submit"
        value='create'
        className={`btn ${styles['create-btn']}`} />
    </form>
  );
};

export default CreateTodo;