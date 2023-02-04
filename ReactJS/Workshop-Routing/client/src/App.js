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
        <Home />
        <Login />
        <Register />
        <CreateGame />
        <EditGame />
        <DetailsGame />
        <Catalog />
      </main>
    </div>
  );
}

export default App;
