import { useState } from "react";

const useChangeHanlder = (data) => {
  const [values, setValues] = useState(data);

  const changeHanlder = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  return { values, setValues, changeHanlder };
};

export default useChangeHanlder;