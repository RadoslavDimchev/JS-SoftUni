import { useState } from 'react';

const CreateTodo = ({ createTodoHandler }) => {
  const [values, setValues] = useState({
    title: ''
  });

  const createSubmitHanldler = (e) => {
    e.preventDefault();
    createTodoHandler({ title: values.title, isMarkerd: false });
    setValues({ title: '' });
  };

  const changeHanlder = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={createSubmitHanldler}>
      <input type="text" name='title' placeholder='Write homework' value={values.title} onChange={changeHanlder} />
      <input type="submit" value='create' />
    </form>
  );
};

export default CreateTodo;