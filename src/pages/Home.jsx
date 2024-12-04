import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterGrid from '../components/CharacterGrid';
import fetchCharacters from '../api/fetchCharacters';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  // Fetch characters when the query changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(query);
      setCharacters(data?.results || []); // Set characters or empty array if API call fails
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <h1>Rick & Morty Character Browser</h1>
      <SearchBar onSearch={(searchQuery) => setQuery(searchQuery)} />
      <CharacterGrid characters={characters} />
    </div>
  );
};

export default Home;
