// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Your backend API base URL
  headers: {
    'Content-Type': 'application/json'
  }
  // Add other default configs if needed
});

export default axiosInstance;
