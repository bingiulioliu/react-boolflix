const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
    }
};

