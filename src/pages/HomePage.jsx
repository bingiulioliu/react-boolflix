import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";
import MediaList from "../components/MediaList";
import Header from "../components/Header";
import TrendList from "../components/TrendList";
import { useState } from "react";
import { getTrending } from "../hooks/useFetch";
import { useEffect } from "react";





function HomePage() {
  const {movies, shows} = useContext(SearchContext)
  
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
    <h1 className="text-center">Movies and TV Shows</h1>
    <TrendList title='Trending Movies' items={trendingMovies} type='movie' />
    <MediaList title='Movies' items={movies} type='movie' />
    <MediaList title='TV Shows' items={shows} type='show' />
  </>
}
export default HomePage;
