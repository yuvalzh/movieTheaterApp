import { Router } from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const movieRoutes = Router();

movieRoutes.get("/all", getAllMovies);
movieRoutes.get("/", getMovieById);
movieRoutes.post("/", createMovie);
movieRoutes.put("/", updateMovie);
movieRoutes.delete("/", deleteMovie);

export default movieRoutes;
