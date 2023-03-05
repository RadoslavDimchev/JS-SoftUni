import './App.css';
import RandomJoke from './components/RandomJoke';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <RandomJoke />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
