import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    age: '',
    description: '',
    gender: 'm',
    userType: 'individual',
    egn: '',
    eik: '',
    tac: false
  });
  const infoRef = useRef();

  useEffect(() => {
    if (values.name && values.age) {
      infoRef.current.value = `${values.name} - ${values.age}`;
    }
  }, [values.name, values.age]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const changeHandler = (e) => {
    setValues(state => (
      {
        ...state,
        [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
      }
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder='Peter' value={values.name} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="age">Age: </label>
            <input type="number" id="age" name="age" value={values.age} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="description">Description: </label>
            <textarea name="description" id="description" cols="30" rows="10" value={values.descritpion} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" checked={values.gender} onChange={changeHandler}>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="user-type-individual">Individual:</label>
            <input type="radio" name='userType' id='user-type-individual' value='individual' onChange={changeHandler} checked={values.userType === 'individual'} />
            <label htmlFor="user-type-coorporate">Coorporate:</label>
            <input type="radio" name='userType' id='user-type-coorporate' value='coorporate' onChange={changeHandler} checked={values.userType === 'coorporate'} />
          </div>

          <div>
            <label htmlFor="identifier">{values.userType === 'individual' ? 'EGN' : 'EIK'}</label>
            {values.userType === 'individual'
              ? <input type="text" name="egn" value={values.egn} onChange={changeHandler} />
              : <input type="text" name="eik" value={values.eik} onChange={changeHandler} />
            }
          </div>

          <div>
            <label htmlFor="tac">Tac: </label>
            <input type="checkbox" id="tac" name="tac" value={values.tac} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="info-user">Info</label>
            <input type="text" id='info-user' name='infoUser' ref={infoRef} />
          </div>

          <div>
            <input type="submit" value="Register" disabled={!values.tac} />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
