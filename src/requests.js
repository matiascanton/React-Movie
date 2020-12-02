const Api_Key = "71698e01802198b91cde62fdd60668d3";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${Api_Key}&lenguage=en-US`,
    fetchNetflix: `https://api.themoviedb.org/3/discover/tv?api_key=${Api_Key}&with_networks=213`,
    fetchTop: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_Key}&lenguage=en-US`,
    fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&include_adult=false&include_video=false&page=1&with_genres=28`,
    fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&include_adult=false&include_video=false&page=1&with_genres=35`,
    fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&include_adult=false&include_video=false&page=1&with_genres=27`,
    fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&include_adult=false&include_video=false&with_genres=10749`,
}

export default requests;