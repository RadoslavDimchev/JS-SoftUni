import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import People from './components/People';
import Person from './components/Person';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>My Project</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing/*' element={<Pricing />} />
          <Route path='/pricing/premium' element={<About />} />
          <Route path='/people' element={<People />} />
          <Route path='/people/:personId/*' element={<Person />} />
          <Route path='/owen-lars' element={<Navigate to='/people/6' replace />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
