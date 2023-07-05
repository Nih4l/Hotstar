import axios from "axios";
const KEY = 'AIzaSyCPDcyttfkKVfQEFc6BjhBzoeRj5gGPj_o';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params : {
        part : 'snippet',
        maxResults: 5,
        key : KEY
    }
})
