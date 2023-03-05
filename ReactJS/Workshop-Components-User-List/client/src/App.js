import { Header } from './components/common/Header';
import { Main } from './components/common/Main';
import { Footer } from './components/common/Footer';
import './App.css';
import UserProvider from './contexts/UserContext';

function App() {
  return (
    <div>
      <Header />

      <UserProvider>
        <Main />
      </UserProvider>

      <Footer />
    </div>
  );
}

export default App;
