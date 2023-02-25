import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
import { GameProvider } from './contexts/GameContext';

const Register = lazy(() => import('./components/Register/Register'));

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <GameProvider >
          <main id="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={
                <Suspense fallback={<span>Loading...</span>}>
                  <Register />
                </Suspense>
              } />
              <Route path='/logout' element={<Logout />} />
              <Route path='/create' element={<CreateGame />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/catalog/:gameId' element={<DetailsGame />} />
              <Route path='/catalog/:gameId/edit' element={<EditGame />} />
            </Routes>
          </main>
        </GameProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
