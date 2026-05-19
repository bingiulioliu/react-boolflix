import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";
import MediaList from "../components/MediaList";
import Header from "../components/Header";
import TrendList from "../components/TrendList";
import { useState } from "react";
import { getTrending } from "../hooks/useFetch";
import { useEffect } from "react";
import { TrendContext } from "../contexts/TrendingContext";



function HomePage() {
  const {movies, shows} = useContext(SearchContext)
  const {trendingMovies, trendingShows} = useContext(TrendContext)
  
  const movieList = movies?.results || [];
  const showList = shows?.results || [];

  const hasResults = movieList.length > 0 || showList.length > 0;

  return <>
    <h1 className="text-center">Movies and TV Shows</h1>

    {hasResults ? (
      <>
      <MediaList title='Movies' items={movies} type='movie' />
      <MediaList title='TV Shows' items={shows} type='show' />
      </>
    ):(
      <>
      <TrendList title='Trending Movies' items={trendingMovies} type='movie' />
      <TrendList title='Trending Shows' items={trendingShows} type='show' />
      </>
    )}
  </>
};
export default HomePage;
