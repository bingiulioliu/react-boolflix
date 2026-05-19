import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { SearchProvider } from "./contexts/SearchContext";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import { TrendProvider } from "./contexts/TrendingContext";

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <TrendProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/tv-shows' element={<TvShows />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TrendProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}
export default App;
