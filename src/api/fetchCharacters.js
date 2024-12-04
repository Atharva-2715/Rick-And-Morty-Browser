import axios from 'axios';

const fetchCharacters = async (query = '', page = 1) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data; // Returns { results: [], info: {} }
  } catch (error) {
    console.error('Error fetching characters:', error);
    return null; // Return null on error
  }
};

export default fetchCharacters;
