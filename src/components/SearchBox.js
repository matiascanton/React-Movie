import React from 'react';

const SearchBox = (props) => {

    return (
        <div className="col col-sm-3">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Pelicula</span>
                </div>
                <input 
                    className="form-control" 
                    placeholder="Escribe el nombre..."
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                ></input>
                <div className="input-group-append">
                <span className="input-group-text"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg></span>
                </div>
            </div>
        </div>

    );
};

export default SearchBox;