import React from 'react';

const MovieList = (props) => {

    // Asignamos la prop favouriteComponent a una variable para poder llamarla como un componente
    const FavouriteComponent = props.favouriteComponent;
    return (

        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-conten-start m-3"> 
                    <img src={movie.Poster} alt="movie"></img>
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;