const key = '4b2fffa299bd38ef0a9a82f2de2ac24a'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestNowShowing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests