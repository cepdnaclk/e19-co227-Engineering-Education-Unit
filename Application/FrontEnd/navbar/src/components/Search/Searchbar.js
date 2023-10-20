import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal links
import './Searchbar.css';
import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value?.title?.toLowerCase?.().includes(searchWord.toLowerCase()) || false
      );
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  const handleLinkClick = () => {
    setFilteredData([]);
    clearInput();
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <div id="clearButton" onClick={clearInput}>
              <CloseIcon />
            </div>
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              value.path.startsWith('http') ? ( // Check if it's an external link
                <a href={value.path} target="_blank" rel="noopener noreferrer" key={key}>
                  <p>{value.title}</p>
                </a>
              ) : (
                <Link to={value.path} key={key} onClick={handleLinkClick}>
                  <p>{value.title}</p>
                </Link>
              )
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
