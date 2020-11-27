import React from 'react';

const MovieList = (props) => {

    // Asignamos la prop favouriteComponent a una variable para poder llamarla como un componente
    const FavouriteComponent = props.favouriteComponent;



    return (
        <>

            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-conten-start m-3"> 
                    <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="movie"></img>
                    <div onClick={()=> props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent/>
                    </div>
                    
                </div>
            ))}

            
        </>
    );
};

export default MovieList;