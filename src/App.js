import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourites from './components/RemoveFavourites';
import Banner from './components/Banner';
import Nav from './components/Nav';

import requests from './requests';



const App = () => {

  //const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [headerMovie, setHeaderMovie] = useState([]);

  useEffect(() => {
    getHeaderMovie();
  }, []);

  const getHeaderMovie = async () => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=71698e01802198b91cde62fdd60668d3&with_networks=213`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setHeaderMovie(responseJson.results[
        Math.floor(Math.random() * responseJson.results.length - 1)
      ]);
    }
  }
  /*const getMovieRequest = async (searchValue) => {
    // Seteamos la url de la API con el searchValue del input
    //const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=199b980a`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=71698e01802198b91cde62fdd60668d3&query=${searchValue}&page=1`;

    // Traemos los datos de la API
    const response = await fetch(url);

    // Los convertimos a un json
    const responseJson = await response.json();

    // Preguntamos si hay datos para mostrar y los seteamos
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  }
  // Una vez que corre la app, entra useEffect con el searchValue como un string vacio como esta arriba en el useState
  // Como searchValue cambio, entra useEffect llamando a la funcion getMovieRequest y pasandole el input value
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);*/

  // Una vez que corre la app, recuperamos los favoritos del Local Storage
  useEffect(() => {
    // Convertimos nuestro json que viene del storage en un objeto
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  // Agrega la pelicula a favoritos
  const addFavouriteMovie = (movie) => {
    //Hace una copia de favoritos y le agregamos la nueva pelicula favorita
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  // Eliminar de Favoritos
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  // Guardar en local storage para cuando recargues la pagina queden tus favoritos
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  return (
    <div className="app">
      <Nav />
      <Banner
        headerMovie={headerMovie}
      />

      <div className="container-fluid movie-app" >
        {/*<div className="row d-flex align-items-center mt-4 mb-4">

          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

  </div>*/}
        <MovieList title="Netelix Originals" fetchUrl={requests.fetchNetflix} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
        <MovieList title="Trending" fetchUrl={requests.fetchTrending} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
        <MovieList title="Top Rated" fetchUrl={requests.fetchTop} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
        <MovieList title="Action" fetchUrl={requests.fetchAction} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
        <MovieList title="Comedy" fetchUrl={requests.fetchComedy} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
        <MovieList title="Romance" fetchUrl={requests.fetchRomance} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie} />
        <MovieList
          title="Favourites"
          moviesFavourite={favourites}
          favouriteComponent={RemoveFavourites}
          handleFavouritesClick={removeFavouriteMovie}
        />

      </div>
    </div>
  );
}

export default App;
