import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Catalog from './components/Catalog/Catalog';
import CreateGame from './components/CreateGame/CreateGame';
import DetailsGame from './components/DetailsGame/DetailsGame';
import EditGame from './components/EditGame/EditGame';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import * as gameService from './services/gameService';

const Register = lazy(() => import('./components/Register/Register'));

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(res => setGames(res));
  }, []);

  const addGameHandler = (gameData) => setGames(state => [...state, gameData]);

  const addComment = (commentData, gameId) => {
    setGames(state => {
      let game = {};
      const newGames = [];

      state.forEach(g => {
        if (g._id === gameId) {
          game = g;
          const comments = game.comments || [];
          comments.push(commentData);
          game.comments = comments;
        } else {
          newGames.push({ ...g });
        }
      });

      return [...newGames, { ...game }];
    });
  };

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home games={games} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={
            <Suspense fallback={<span>Loading...</span>}>
              <Register />
              </Suspense>
          } />
          <Route path='/create' element={<CreateGame addGameHandler={addGameHandler} />} />
          <Route path='/edit' element={<EditGame />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path='/catalog/:gameId' element={<DetailsGame games={games} addComment={addComment} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
