import { Router } from "express";
import {
  getAllScreening,
  getScreeningById,
  createScreening,
  deleteScreening,
} from "../controllers/screeningController.js";

const screeningRoutes = Router();

screeningRoutes.get("/all", getAllScreening);
screeningRoutes.get("/", getScreeningById);
screeningRoutes.post("/", createScreening);
screeningRoutes.delete("/", deleteScreening);

export default screeningRoutes;
