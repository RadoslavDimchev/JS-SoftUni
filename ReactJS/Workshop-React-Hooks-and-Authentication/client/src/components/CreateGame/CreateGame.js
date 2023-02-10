import { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";

import * as gameService from '../../services/gameService';

const CreateGame = () => {
  const [values, setValues] = useState({
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
  });
  const { addGameHandler } = useContext(GameContext);

  const createSubmitHandler = (ev) => {
    ev.preventDefault();

    gameService.create(values)
      .then(res => addGameHandler(res));
  };

  const changeHanlder = (ev) => {
    setValues(state => ({
      ...state,
      [ev.target.name]: [ev.target.value]
    }));
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createSubmitHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            value={values.title}
            onChange={changeHanlder}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            value={values.category}
            onChange={changeHanlder}
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            placeholder={1}
            value={values.maxLevel}
            onChange={changeHanlder}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={values.imageUrl}
            onChange={changeHanlder}
          />
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHanlder} />
          <input
            className="btn submit"
            type="submit"
            value="Create Game"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateGame;