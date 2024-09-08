import { useState } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import SearchResultsList from './Component/SearchResultsList';
import home from "./assets/home.svg";
import { Github, Link } from 'lucide-react';

function App() {
  const [results, setResults] = useState([]);
  const [showGithubTooltip, setShowGithubTooltip] = useState(false);
  const [showLinkTooltip, setShowLinkTooltip] = useState(false);

  return (
    <div className="App">
      <div className="search-bar-container">
        <img src={home} alt="logo" className="logo" />
        <SearchBar setresults={setResults} />
        {results.length > 0 ? (
          <SearchResultsList results={results} />
        ) : (
          <div className="search-message">...</div>
        )}
      </div>

      <div className="github-icon">
        <div
          className="icon-container"
          onMouseEnter={() => setShowGithubTooltip(true)}
          onMouseLeave={() => setShowGithubTooltip(false)}
        >
          <a href="https://github.com/Oussama-benrkia/WorldOus">
            <Github />
          </a>
          {showGithubTooltip && <span className="tooltip">Source Code</span>}
        </div>

        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

        <div
          className="icon-container"
          onMouseEnter={() => setShowLinkTooltip(true)}
          onMouseLeave={() => setShowLinkTooltip(false)}
        >
          <a href="https://linktr.ee/OussamaBenrkia">
            <Link />
          </a>
          {showLinkTooltip && <span className="tooltip">About Me</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
