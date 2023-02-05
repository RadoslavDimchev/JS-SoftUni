import { useState } from 'react';

const CreateTodo = () => {
  const [values, setValues] = useState({
    title: ''
  });

  const createTodoHanlder = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const changeHanlder = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: [e.target.values]
    }));
  };

  return (
    <form onSubmit={createTodoHanlder}>
      <input type="text" name='title' placeholder='Write homework' value={values.value} onChange={changeHanlder} />
      <input type="submit" value='Create' />
    </form>
  );
};

export default CreateTodo;