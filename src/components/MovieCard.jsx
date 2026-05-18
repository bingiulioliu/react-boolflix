import { SearchContext } from "../contexts/SearchContext";


function MovieCard({ movie }) {
    return <>
        <div className="card-flip m-3">
            <div className="card-inner">
                {/* Fronte: Solo Immagine */}
                <div className="card-front">
                    <img src = {`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`} className="card-img-top h-100" alt={movie.title} style={{ objectFit: 'cover' }} />
                </div>

                {/* Retro: Informazioni */}
                <div className="card card-back p-3">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{movie.original_title}</h6>
                        <p className="card-text"><strong>Voto:</strong> {movie.vote_average}</p>
                        <p className="card-text"><strong>Lingua:</strong> {movie.original_language}</p>
                        <p className="card-text small">{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MovieCard;