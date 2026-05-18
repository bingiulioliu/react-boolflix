const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;


function searchMovie(movieName) {
    // Compongo l'URL di ricerca
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=it-IT`;
    
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


export {searchMovie};