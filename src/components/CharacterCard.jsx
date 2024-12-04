import React from 'react';

const CharacterCard = ({ character }) => {
  const { image, name, status, location } = character;

  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Last Known Location: {location.name}</p>
    </div>
  );
};

export default CharacterCard;
