import axios from "axios";
import { serverUrl } from "../api/consts.js";

export const getMovies = async () => {
  try {
    const response = await axios.get(`${serverUrl}/movies/all`);
    const moviesRes = response.data;
    return moviesRes;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${serverUrl}/movies`, {
      params: { id },
    });
    const moviesRes = response.data;
    return moviesRes;
  } catch (err) {
    console.log(err);
  }
};

export const createMovie = async (movie) => {
  try {
    const response = await axios.post(`${serverUrl}/movies`, movie);
    console.log("Response:", response.data);
    const movieRes = response.data;
    return movieRes;
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (id, movie) => {
  try {
    const response = await axios.put(`${serverUrl}/movies`, movie, {
      params: { id },
    });
    console.log("Response:", response.data);
    const movieRes = response.data;
    return movieRes;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${serverUrl}/movies`, {
      params: { id },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
