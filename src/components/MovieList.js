import React, { useState, useEffect } from 'react';

const MovieList = ({ title, fetchUrl, favouriteComponent, handleFavouritesClick, moviesFavourite }) => {

    // Asignamos la prop favouriteComponent a una variable para poder llamarla como un componente
    const FavouriteComponent = favouriteComponent;

    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);

    /* useEffect(() => {
 
         async function fetchData() {
             const request = await fetch(fetchUrl);
             const response = await request.json();
             setMovies(request.data.results);
             return request;
         }
         fetchData();
     }, [fetchUrl]);*/
    /* if (moviesFavourite) {
         setMovies(moviesFavourite);
     }*/

    const getMovieRequest = async (fetchUrl) => {

        // Traemos los datos de la API
        const response = await fetch(fetchUrl);

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
        getMovieRequest(fetchUrl);
    }, [fetchUrl]);



    return (
        <>
            <h2 className="title_movie"> {title}</h2>
            <div className="row row_movies">


                {movies.map((movie, index) => (
                    <div className="image-container d-flex justify-conten-start m-3">
                        <img key={movie.id} src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} alt="movie"></img>
                        <div onClick={() => handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                            <FavouriteComponent />
                        </div>

                    </div>
                ))}


            </div>
        </>
    );
};

export default MovieList;