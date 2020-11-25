import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MovieList from './components/MovieList';
import MovieListHeader from './components/MovieListHeader';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';


const App = () => {

  const [movies, setMovies] = useState ([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) =>{

    // Seteamos la url de la API con el searchValue del input
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=199b980a`;

    // Traemos los datos de la API
    const response = await fetch(url);

    // Los convertimos a un json
    const responseJson = await response.json();

    // Preguntamos si hay datos para mostrar y los seteamos
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  }
  // Una vez que corre la app, entra useEffect con el searchValue como un string vacio como esta arriba en el useState
  // Como searchValue cambio, entra useEffect llamando a la funcion getMovieRequest y pasandole el input value
  useEffect(() => {
    getMovieRequest(searchValue);
    
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app" >
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Movies"/>
        <SearchBox
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList
          movies = {movies}
          favouriteComponent = {AddFavourite}
        />
      </div>
    </div>
  );
}

export default App;
