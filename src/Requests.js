const key='01c8d0aeb1b7747b3d3ed9ec309e5cf1'
// const key1= 'https://www.youtube.com/watch?v=SUXWAEX2jlg'

const Requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming :`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

    requestVideos: `https://api.themoviedb.org/3/movie/550/videos?api_key=${key}&include_video_language=en,fr,es,de,pt`,
    // // requestTrailer : `https://www.youtube.com/watch?v=SUXWAEX2jlg`

}

export default Requests
