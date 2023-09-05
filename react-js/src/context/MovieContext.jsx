// Context.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

export const MovieContext = createContext();

export const useMovie = () => {
    const context = useContext(MovieContext);
    if (!context) {
      throw new Error("useMovie must be used within an MovieProvider");
    }
    return context;
}

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [movieError, setMovieError] = useState(null);
  const { authToken } = useAuth();
  
  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/movies', {
        headers: {
          Authorization: "Bearer " + authToken,
          'Content-Type': 'application/json',
        },
      });
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener la lista de películas', error);
      setError('Error al cargar las películas. Inténtalo de nuevo más tarde.');
      setLoading(false);
    }
  };

  const addMovie = async (newMovie) => {
    console.log(newMovie);    
    try {
      const response = await axios.post('http://localhost:5000/api/movies', newMovie, {
        headers: {
          Authorization: "Bearer " + authToken,
          'Content-Type': 'application/json',
        },
      });
      setMovies([...movies, response.data]);
    } catch (error) {
      console.error('Error al agregar la película', error);
    }
  };

  const updateMovieToEdit = (movie) =>{
    setMovieToEdit(movie);
  };

  const updateMovie = async (id, updatedMovie) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/movies/${id}`, updatedMovie, {
        headers: {
          Authorization: "Bearer " + authToken,
          'Content-Type': 'application/json',
        },
      });
      console.log('RESPONSE');
      console.log(response);  
  
      // Actualiza el estado local inmediatamente y también actualiza movieToEdit si corresponde
      setMovies((prevMovies) => {
        return prevMovies.map((movie) => {
          return movie.id === id ? response.data.movie : movie;
        });
      });
  
      // Actualiza movieToEdit si es la película que se está editando actualmente
      if (movieToEdit && movieToEdit.id === id) {
        setMovieToEdit(response.data);
      }
    } catch (error) {
      console.error('Error al actualizar la película', error);
    }
  };
  

  const deleteMovie = async (movieId) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${movieId}`, {
        headers: {
          Authorization: "Bearer " + authToken,
          'Content-Type': 'application/json',
        },
      });
      const updatedMovies = movies.filter((movie) => movie.id !== movieId);
      setMovies(updatedMovies);
    } catch (error) {
      console.error('Error al eliminar la película', error);
      // Maneja el error apropiadamente
    }
  };
  // Funciones para agregar, modificar y eliminar películas

  return (
    <MovieContext.Provider
      value={{ 
        movies,
        loading,
        movieError,
        fetchMovies,
        addMovie,
        updateMovie,
        deleteMovie, 
        updateMovieToEdit,
        movieToEdit, }}>
      {children}
    </MovieContext.Provider>
  )
}
