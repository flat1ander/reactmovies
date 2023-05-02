import {useState} from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = '3abc7fd5';

  // function to fetch movie data
  //searchTerm is form data from Form.js
  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    // parse the returned JSON
    const data = await response.json();
  }

 
  //call getMovie fucntion
  getMovie('dune')

  // Everything in this return is JSX (which is JS and XML):
  return (
    <div className="App">
      {/* pass the getMovie function to MovieDisplay */}
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
