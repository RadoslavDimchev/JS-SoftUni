import { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment/Comment";

const DetailsGame = ({ games, addComment }) => {
  const [values, setValues] = useState({
    username: '',
    comment: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    comment: ''
  });
  const { gameId } = useParams();
  const game = games.find(g => g._id === gameId);

  const addCommentHanlder = (ev) => {
    ev.preventDefault();

    addComment(`${values.username}: ${values.comment}`, gameId);

    values.username = '';
    values.comment = '';
  };

  const changeHanlder = (ev) => {
    setValues(state => ({
      ...state,
      [ev.target.name]: ev.target.value
    }));
  };

  const validateUsername = (ev) => {
    const valueLength = ev.target.value.length;
    let errorMsg = '';

    if (valueLength < 4) {
      errorMsg = 'Username must be at least 4 characters long';
    } else if (valueLength > 10) {
      errorMsg = 'Username must be at most 10 characters long';
    }

    setErrors(state => ({
      ...state,
      username: errorMsg
    }));
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt={game.title} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        <div className="details-comments">
          <h2>Comments:</h2>
          {game.comments?.length > 0
            ? <ul>
              {game.comments.map((c, i) => <Comment key={i} comment={c} />)}
            </ul>
            : <p className="no-comment">No comments.</p>
          }
        </div>
        <div className="buttons">
          <a href="edit" className="button">
            Edit
          </a>
          <a href="delete" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHanlder}>
          <input
            type="text"
            name="username"
            placeholder="Peter Smith"
            value={values.username}
            onChange={changeHanlder}
            onBlur={validateUsername}
          />
          {errors.username &&
            <div style={{ color: 'red' }}>{errors.username}</div>
          }

          <textarea
            name="comment"
            placeholder="Comment......"
            value={values.comment}
            onChange={changeHanlder}
          />
          <input
            className="btn submit"
            type="submit"
            value="Add Comment"
          />
        </form>
      </article>
    </section>
  );
};

export default DetailsGame;