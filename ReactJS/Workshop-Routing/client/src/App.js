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

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreateGame />} />
          <Route path='/edit' element={<EditGame />} />
          <Route path='/details' element={<DetailsGame />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
