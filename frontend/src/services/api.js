import axios from 'axios';

const API = axios.create({
  baseURL: 'https://corporate-khushiyaan-backend.onrender.com/api',
});

export const fetchProducts = () => API.get('/products');
export const sendEnquiry = (data) => API.post('/enquiry', data);

export default API;