import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MovieList from './components/MovieList';


const App = () => {

  const [movies, setMovies] = useState ([
    {
      Title:	'Guardians of the Galaxy Vol. 2',
      Year:	'2017',
      imdbID:	'asdqwe',
      Type: 'movie',	
      Poster: 'https://images-na.ssl-images-amazon.com/images/I/7105gTLLZlL._AC_SL1024_.jpg',
  
    }

  ]);
  return (
    <div className="container-fluid movie-app" >
      <div className="row">
        <MovieList
          movies = {movies}
        />
      </div>
      
    </div>
  );
}

export default App;
