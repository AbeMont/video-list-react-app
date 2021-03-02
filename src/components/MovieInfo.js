
function MovieInfo({ movie }){

    const posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`;

    return(
        <div className="card-flip">
            <div className="card-inner">
                <div className="card-front">
                    <img src={ posterPath } alt={ movie.title }/>
                </div>
                <div className="card-back">
                    <h1>{ movie.title }</h1>
                    <h3>Release Date: { movie.release_date }</h3>
                    <p> Vote Average: { movie.vote_average }</p>
                    <div>
                        { movie.overview }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;