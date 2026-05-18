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
    // Handle per film (da fare DRY)
    // ================================
    const handleSearch = ((query) => {
        searchMovie(query)
            .then(data => {
                setMovies(data)
                console.log(data);

            })
            .catch(error => {
                if (error.message === 'Pagina non trovata') {
                    setErrorMsg(error.message)
                } else {
                    setErrorMsg('Qualcosa è andato storto')
                }
            });
    });

    // ================================
    // Handle per serie (da fare DRY)
    // ================================
    const handleSearchTv = ((query) => {
        searchTvShow(query)
            .then(data => {
                setShows(data)
                console.log(data);

            })
            .catch(error => {
                if (error.message === 'Pagina non trovata') {
                    setErrorMsg(error.message)
                } else {
                    setErrorMsg('Qualcosa è andato storto')
                }
            });
    });


    const value = {
        movies,
        setMovies,
        errorMsg,
        setErrorMsg,
        handleSearch
    }

    return (
        <SearchContext value={value}>
            {children}
        </SearchContext>
    )

};

export { SearchContext, SearchProvider }