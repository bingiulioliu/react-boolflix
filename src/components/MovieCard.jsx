import { FlagIcon } from "react-flag-kit";
import { SearchContext } from "../contexts/SearchContext";


function MovieCard({ movie, show }) {

    const data = show || movie;

    const title = data.title || data.name;
    const originalTitle = data.original_title || data.original_name;
    const language = data.original_language;
    const poster = data.poster_path || data.backdrop_path;
    const vote = data.vote_average;
    const overview = data.overview;


    // Mappatura specifica per convertire le lingue di TMDB in codici Nazione 
    // che la libreria "react-flag-kit" si aspetta.
    const getCountryCode = (lang) => {
        const map = {
            'en': 'GB', 
            'ja': 'JP',
            'ko': 'KR',
            'zh': 'CN',
            'it': 'IT',
            'fr': 'FR',
            'es': 'ES',
            'de': 'DE'
        };
        return map[lang] || lang.toUpperCase();
    };

    const getStars = (vote) => {
        const stars = Math.ceil(vote/2);
        return stars;
    }

    return <>
        <div className="card-flip m-3">
            <div className="card-inner">
                {/* Fronte: Solo Immagine */}
                <div className="card-front">
                    <img src={`https://image.tmdb.org/t/p/w342/${poster}`} className="card-img-top h-100" alt={title} style={{ objectFit: 'cover' }} />
                </div>

                {/* Retro: Informazioni */}
                <div className="card card-back p-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{originalTitle}</h6>
                        <p className="card-text"><strong>Voto:</strong> {getStars(vote)}</p>
                        <p className="card-text"><strong>Lingua:</strong> <FlagIcon code={getCountryCode(language)} /></p>
                        <p className="card-text small">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MovieCard;