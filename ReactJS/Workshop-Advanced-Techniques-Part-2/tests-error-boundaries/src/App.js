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

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;