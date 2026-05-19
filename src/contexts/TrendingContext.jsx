import { useState } from "react";
import { useEffect } from "react";
import { getTrending } from "../hooks/useFetch";
import { createContext } from "react";

const TrendContext = createContext(null);

function TrendProvider ({ children }) {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingShows, setTrendinShows] = useState([]);

    useEffect(() => {
        getTrending('movie')
            .then(data =>
                setTrendingMovies(data.results));
        getTrending('tv')
            .then(data =>
                setTrendinShows(data.results));
    }, []);
    
    const value = {
        trendingMovies,
        trendingShows,
    }
    
    return (
        <TrendContext value={value}>
        {children}
    </TrendContext>
);
}

export {TrendContext, TrendProvider}