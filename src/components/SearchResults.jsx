import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Import hooks
import SearchBar from './SearchBar';  // Import the SearchBar component

const SearchResults = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();  // Get current location to access query params
  const navigate = useNavigate();  // Create navigate function
  const currentQuery = new URLSearchParams(location.search).get('query');  // Extract query parameter from URL

  useEffect(() => {
    if (currentQuery) {
      setQuery(currentQuery);  // Set query state to URL query parameter
      fetchData(currentQuery);  // Fetch data based on the query
    }
  }, [currentQuery]);

  const fetchData = async (searchQuery) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`);
    const data = await response.json();
    setCharacters(data?.results || []);
  };

  const handleSearch = (newQuery) => {
    navigate(`/search?query=${newQuery}`);  // Navigate with the new search query
  };

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <button onClick={() => navigate('/')}>Go Back Home</button>  {/* Button to go back to home */}
      
      {/* Pass handleSearch function and current query to SearchBar */}
      <SearchBar onSearch={handleSearch} query={query} />

      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
