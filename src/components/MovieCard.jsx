import { SearchContext } from "../contexts/SearchContext";


function MovieCard({movie}) {
    return <>
        <h1>Movie Card</h1>
            <div className="card m-3" style={{ width: '18rem' }}>
                {/* Immagine di copertina */}
                <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
                    className="card-img-top"
                    alt={movie.title}
                />

                <div className="card-body">
                    {/* Titolo */}
                    <h5 className="card-title">Titolo: {movie.title}</h5>

                    {/* Titolo Originale */}
                    <h6 className="card-subtitle mb-2 text-muted">
                        Titolo originale: {movie.original_title}
                    </h6>

                    {/* Voto */}
                    <p className="card-text">
                        <strong>Voto:</strong> {movie.vote_average} / 10
                    </p>

                    {/* Overview */}
                    <p className="card-text small">
                        {movie.overview}
                    </p>
                </div>
            </div>
    </>
}

export default MovieCard;