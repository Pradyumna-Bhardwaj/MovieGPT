export const API_OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
}


//API_URLs
export const getUpcomingMoviesIn_API_URL = 'https://imdb236.p.rapidapi.com/imdb/upcoming-releases?countryCode=IN&type=MOVIE';
export const getMostPopularMovies_API_URL = 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies'
export const getTop250Movies_API_URL = "https://imdb236.p.rapidapi.com/imdb/top250-movies"
export const getTopIndianMovies_API_URL = "https://imdb236.p.rapidapi.com/imdb/india/top-rated-indian-movies"



//LOGOS
export const NETFLIX_LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY