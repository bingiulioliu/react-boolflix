const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;
const baseUrl = 'https://api.themoviedb.org/3/search/';
const params = new URLSearchParams({
    adult: false,
    language: 'it-IT'
})

function searchMovie(movieName) {
    // Compongo l'URL di ricerca
    const url = `${baseUrl}movie?query=${movieName}&${params.toString()}`;
    
    return fetch(url, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
        }
    })
    .then(response=>{
        if (response.status === 404){
            throw new Error ('Pagina non trovata')
        }
        return response.json();
    })
};

function searchTvShow(showName) {
    // Compongo l'URL di ricerca
    const url = `${baseUrl}tv?query=${showName}&${params.toString()}`;
    
    return fetch(url, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
        }
    })
    .then(response=>{
        if (response.status === 404){
            throw new Error ('Pagina non trovata')
        }
        return response.json();
    })
};

const getTrending = (type, timeWindow) =>{

    const timeWindow = 'week';
    const trendUrl = `https://api.themoviedb.org/3/trending/${type}/${timeWindow}`;
    
    fetch(trendUrl, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
        }
    })
    .then(response=>{
        if (response.status === 404){
            throw new Error ('Pagina non trovata')
        }
        return response.json();
    })
};




export {searchMovie, searchTvShow, getTrending};