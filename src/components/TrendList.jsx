import { useState } from "react";
import { getTrending } from "../hooks/useFetch";
import { useEffect } from "react";



const TrendList = ({ title, items, type }) => {
    
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingShows, setTrendinShows] = useState([]);
    
    useEffect (() =>{
        getTrending('movie')
            .then(data =>
                setTrendingMovies(data.results));
        getTrending('tv')
            .then(data =>
                setTrendinShows(data.results));
    }, []);

return <>
        <h2>{title}</h2>
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                        {/* props */}
                        <MovieCard {...{ [type]: item }} />
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default TrendList