import axios from 'axios';

const API = 'http://localhost:5000/api/movie';
export const getAllMoviesRequest = () => axios.get(`${API}/`);
export const createMovieRequest = (user) => axios.post(`${API}/`,user);
export const getMovieByIdRequest = (user,id) => axios.post(`${API}/${id}`,user);
export const updateMovieRequest = (user,id) => axios.post(`${API}/${id}`,user);
export const deleteMovieRequest = (user,id) => axios.post(`${API}/${id}`,user);
export const getFilteredMovieRequest = (user,filter) => axios.post(`${API}/${filter}`,user);