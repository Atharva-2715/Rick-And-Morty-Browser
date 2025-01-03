import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search characters..."
      onKeyPress={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
