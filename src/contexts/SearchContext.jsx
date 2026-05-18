import { useState } from "react";
import { createContext } from "react";
import { searchMovie, searchTvShow } from "../hooks/useFetch";
import { useEffect } from "react";


const SearchContext = createContext(null);

function SearchProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    // ================================
    // Handle per film e serie
    // ================================
    const handleSearch = (query, type) => {
        // Gestione Film
        if (type === 'movie' || type === 'all') {
            searchMovie(query)
                .then(data => {
                    setMovies(data);
                })
                .catch(error => {
                    setErrorMsg('Errore nel caricamento dei film');
                });
        }
        // Gestione Serie TV
        if (type === 'tv' || type === 'all') {
            searchTvShow(query)
                .then(data => {
                    setShows(data);
                })
                .catch(error => {
                    setErrorMsg('Errore nel caricamento delle serie');
                });
        }
    };


    const value = {
        movies,
        setMovies,
        errorMsg,
        setErrorMsg,
        handleSearch,
        shows,
        setShows
    }

    return (
        <SearchContext value={value}>
            {children}
        </SearchContext>
    )

};

export { SearchContext, SearchProvider }