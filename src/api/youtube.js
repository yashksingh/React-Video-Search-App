import axios from 'axios';
const KEY = 'AIzaSyCq48xCFhMNyiREetHXn0WTDXc_GCRPlEI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});