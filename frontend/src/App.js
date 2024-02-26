import logo from './logo.svg';
import './App.css';
import AddArticle from './pages/AddArticle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AddArticle />
        </a>
      </header>
    </div>
  );
}
tanstackquery
export default App;
