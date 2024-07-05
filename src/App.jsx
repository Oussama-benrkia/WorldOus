import { useState } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import SearchResultsList from './Component/SearchResultsList';
import home from "./assets/home.svg";

function App() {
  const [results, setresults] = useState([]);
  return (
    <div className='App'>
      <div className='search-bar-container'>
        <img src={home} alt="logo" className='logo' />
        <SearchBar setresults={setresults} />
        {results.length > 0 ? (
          <SearchResultsList results={results} />
        ) : (
          <div className='search-message'>...</div>
        )}
              </div>
    </div>
  );
}

export default App;