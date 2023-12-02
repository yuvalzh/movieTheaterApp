import Movie from "../database/models/movieSchema.js";
import { deleteAllScreeningById } from "../controllers/screeningController.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.json(movies);
  } catch (error) {
    console.error("Error retrieving movies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const id = req.query.id;
    const movie = await Movie.findById(id);

    res.json(movie);
  } catch (error) {
    console.error("Error retrieving movie:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createMovie = async (req, res) => {
  const movieBody = req.body;
  try {
    const createdMovie = await Movie.create(movieBody);
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const movieBody = req.body;
  const movieId = req.query.id;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, movieBody);

    res.status(201).json(updatedMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  const movieId = req.query.id;
  try {
    await deleteAllScreeningById(movieId);
    await Movie.findByIdAndDelete(movieId);

    res.status(200).json("Resource delete successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
