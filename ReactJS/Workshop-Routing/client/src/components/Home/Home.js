import { useEffect, useState } from 'react';
import * as gameService from '../../sesrvices/gameService';
import LatestGame from './LatestGame/LatestGame';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(res => setGames(res));
  }, []);

  return (
    <section id="welcome-world" >
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        {games.length > 0
          ? games.map(g => <LatestGame key={g._id} game={g} />)
          : <p className="no-articles">No games yet</p>}
      </div>
    </section >
  );
};

export default Home;