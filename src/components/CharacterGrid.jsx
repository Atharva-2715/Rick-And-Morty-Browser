import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters }) => (
  <div className="character-grid">
    {characters.slice(0, 10).map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </div>
);

export default CharacterGrid;
