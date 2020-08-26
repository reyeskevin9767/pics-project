import axios from 'axios';

// Create an instance of the axios client
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: process.env.REACT_APP_CLIENT_ID,
  },
});
