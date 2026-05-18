import { useState } from "react";
import { createContext } from "react";
import { searchMovie } from "../hooks/useFetch";
import { useEffect } from "react";


const SearchContext = createContext(null);

function SearchProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');


    const handleSearch = ((query) => {
        searchMovie(query)
            .then(data => {
                setMovies(data)
                console.log(data);
                
            })
            .catch(error => {
                if (error.message === 'Pagina non trovata'){
                    setErrorMsg(error.message)
                } else {
                    setErrorMsg('Qualcosa è andato storto')
                }
    });
}, []);

    const value = {
        movies,
        setMovies,
        errorMsg,
        setErrorMsg
    }

    return (
        <SearchContext value={value}>
            {children}
        </SearchContext>
    )

};

export {SearchContext, SearchProvider}