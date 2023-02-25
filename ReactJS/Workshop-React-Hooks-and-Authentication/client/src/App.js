import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as gameService from './services/gameService';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import Catalog from './components/Catalog/Catalog';
import CreateGame from './components/CreateGame/CreateGame';
import DetailsGame from './components/DetailsGame/DetailsGame';
import EditGame from './components/EditGame/EditGame';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { GameContext } from './contexts/GameContext';

const Register = lazy(() => import('./components/Register/Register'));

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll()
      .then(res => setGames(res));
  }, []);

  const addGameHandler = (gameData) => {
    setGames(state => [...state, gameData]);
    navigate(`/catalog/${gameData._id}`);
  };

  const editGameHanlder = (gameId, gameData) => {
    setGames(state => state.map(g => g._id === gameId ? gameData : g));
  };

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
    <AuthProvider>
      <div id="box">
        <Header />

        <GameContext.Provider value={{ games, addGameHandler, editGameHanlder }}>
          <main id="main-content">
            <Routes>
              <Route path='/' element={<Home games={games} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={
                <Suspense fallback={<span>Loading...</span>}>
                  <Register />
                </Suspense>
              } />
              <Route path='/logout' element={<Logout />} />
              <Route path='/create' element={<CreateGame />} />
              <Route path='/catalog' element={<Catalog games={games} />} />
              <Route path='/catalog/:gameId' element={<DetailsGame games={games} addComment={addComment} />} />
              <Route path='/catalog/:gameId/edit' element={<EditGame />} />
            </Routes>
          </main>
        </GameContext.Provider>
      </div>
    </AuthProvider>
  );
}

export default App;
