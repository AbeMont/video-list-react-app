import { useState } from 'react';
import MovieInfo from './MovieInfo';

function SearchMovie(){

    const [query,setQuery] = useState('');
    const [movies,setMovies] = useState([]);

    // Notes for Movie DB API
    // APi Documentation
    // https://developers.themoviedb.org/3/getting-started/introduction

    // How to search for movies documentation examples
    // https://developers.themoviedb.org/3/search/search-movies

    // Search movie
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

    // IMPORTANT!!! MY API KEY
    // https://api.themoviedb.org/3/movie/550?api_key=a5205ac3a0fdff1d4ce8ac2fbb0f7d99

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a5205ac3a0fdff1d4ce8ac2fbb0f7d99&language=en-US&query=${query}&page=1&include_adult=false`;

    const getMovies = async (e) => {

        try {

            e.preventDefault();

            const result = await fetch(url);
            const data = await result.json();

            setMovies(data.results);
            console.log('My State', query, movies);

        } catch (error) {
            console.log("Fetch Error: ", error.message);
        }
        
    }

    return(
        <div id="content" className="section" onSubmit={getMovies}>
            <form className="form-control">

                <label className="form-label">MOVIE NAME</label>

                    <input 
                        type="text" 
                        className="form-input" 
                        name="query"
                        onChange={ (e) => setQuery( e.target.value ) } 
                        placeholder="Enter a movie name" 
                        required 
                    />

                <button type="submit" className="form-button">Search</button>

            </form>

            <div className="card-list">
                {
                    movies.filter( movie => movie.poster_path )
                    .map( movie =>{
                       return <MovieInfo movie= {movie} key={movie.id}/>
                    })
                }
            </div>

        </div>
    )
}

export default SearchMovie;