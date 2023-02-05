const url = 'http://localhost:3030/jsonstore/todos';

const useTodoApi = () => {
  const createTodo = (todoData) => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(todoData)
    }).then(res => res.json());
  };

  const editTodo = (todo) => {
    return fetch(`${url}/${todo._id}`, {
      method: 'PUT',
      body: JSON.stringify(todo)
    }).then(res => res.json());
  };

  const deleteTodo = (todoId) => {
    return fetch(`${url}/${todoId}`, {
      method: 'DELETE'
    }).then(res => res.json());
  };

  return {
    createTodo,
    editTodo,
    deleteTodo
  };
};

export default useTodoApi;