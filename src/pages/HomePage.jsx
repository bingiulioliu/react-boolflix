import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


function HomePage() {
  const {movies} = useContext(SearchContext)


  return <>
    <h1>Home</h1>
    {JSON.stringify(movies)};
  </>;
}
export default HomePage;
