import React, { useState, useEffect } from 'react';
/*import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';*/

const MovieList = ({ title, fetchUrl, favouriteComponent, handleFavouritesClick, moviesFavourite }) => {

    // Asignamos la prop favouriteComponent a una variable para poder llamarla como un componente
    const FavouriteComponent = favouriteComponent;

    const [movies, setMovies] = useState([]);
    //const [trailerUrl, setTrailerUrl] = useState("");

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
    useEffect(() => {
        if (moviesFavourite) {
            setMovies(moviesFavourite);
        } else {


            getMovieRequest(fetchUrl);
        }
    }, [fetchUrl, moviesFavourite]);

    /*const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error) => console.log(error));
        }
    }*/


    return (
        <>
            <h2 className="title_movie"> {title}</h2>
            <div className="row row_movies">
                {movies.map((movie, index) => (
                    <div className="image-container d-flex m-3">
                        <img
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
                            alt="movie"
                        //onClick={() => handleClick(movie)}
                        ></img>
                        <div onClick={() => handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                            <FavouriteComponent />
                        </div>

                    </div>
                ))}
            </div>
            {/*trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />*/}
        </>
    );
};

export default MovieList;