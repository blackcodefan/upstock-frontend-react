import axios from 'axios';

import { baseURL } from 'config';

// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json'
  }
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     Promise.reject((error.response && error.response.data) || 'Something went wrong');
//   }
// );

export default axiosInstance;
