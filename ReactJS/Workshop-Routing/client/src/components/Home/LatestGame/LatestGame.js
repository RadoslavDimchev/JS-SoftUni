const LatestGame = ({ game }) => {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={game.imageUrl} alt={game.title} />
      </div>
      <h3>{game.title}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <a href="#" className="btn details-btn">
          Details
        </a>
      </div>
    </div>
  );
};

export default LatestGame;