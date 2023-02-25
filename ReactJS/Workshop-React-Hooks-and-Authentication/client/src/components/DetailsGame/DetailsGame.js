import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Comment from "./Comment/Comment";
import * as gameService from "../../services/gameService";
import { GameContext } from "../../contexts/GameContext";


const DetailsGame = () => {
  const [currentGame, setCurrentGame] = useState({});
  const { gameId } = useParams();
  const { addComment } = useContext(GameContext);

  useEffect(() => {
    gameService.getById(gameId)
      .then(res => setCurrentGame(res));
  }, [gameId]);

  const addCommentHanlder = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const comment = formData.get('comment');

    // addComment(`${values.username}: ${values.comment}`, gameId);
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={currentGame.imageUrl} alt={currentGame.title} />
          <h1>{currentGame.title}</h1>
          <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
          <p className="type">{currentGame.category}</p>
        </div>
        <p className="text">{currentGame.summary}</p>
        <div className="details-comments">
          <h2>Comments:</h2>
          {currentGame.comments?.length > 0
            ? <ul>
              {currentGame.comments.map((c, i) => <Comment key={i} comment={c} />)}
            </ul>
            : <p className="no-comment">No comments.</p>
          }
        </div>
        <div className="buttons">
          <Link to={`edit`} className="button">
            Edit
          </Link>
          <a href="delete" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHanlder}>
          <textarea
            name="comment"
            placeholder="Comment......"
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