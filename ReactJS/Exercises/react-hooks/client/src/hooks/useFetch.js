import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        setTodos(Object.values(res));
      });
  }, [url]);

  return [todos, setTodos, isLoading];
};

export default useFetch;