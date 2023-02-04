import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Catalog from './components/Catalog/Catalog';
import CreateGame from './components/CreateGame/CreateGame';
import DetailsGame from './components/DetailsGame/DetailsGame';
import EditGame from './components/EditGame/EditGame';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import * as gameService from './services/gameService';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(res => setGames(res));
  }, []);

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home games={games} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreateGame />} />
          <Route path='/edit' element={<EditGame />} />
          <Route path='/details' element={<DetailsGame />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
