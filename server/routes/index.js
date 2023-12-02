import { Router } from "express";
import movieRoutes from "./movie.js";
import screeningRoutes from "./screening.js";

const routes = Router();

routes.use("/movies", movieRoutes);
routes.use("/screenings", screeningRoutes);

export default routes;
