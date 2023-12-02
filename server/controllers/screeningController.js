import Screening from "../database/models/screeningSchema.js";

export const getAllScreening = async (req, res) => {
  try {
    const screenings = await Screening.find({}).populate("movieId");
    res.json(screenings);
  } catch (error) {
    console.error("Error retrieving screenings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getScreeningById = async (req, res) => {
  try {
    const id = req.query.id;
    const screening = await Screening.findById(id).populate("movieId");
    if (!screening) {
      return res.status(404).json({ error: "Screening not found" });
    }
    res.json(screening);
  } catch (error) {
    console.error("Error retrieving screening:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createScreening = async (req, res) => {
  const screeningBody = req.body;
  try {
    const createScreening = await Screening.create(screeningBody);
    res.status(201).json(createScreening);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteScreening = async (req, res) => {
  const screeningId = req.query.id;
  try {
    await Screening.findByIdAndDelete(screeningId);

    res.status(200).json("Resource delete successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteAllScreeningById = async (movieId) => {
  try {
    // This will delete all movies with the given ID
    await Screening.deleteMany({ movieId });
    console.log(movieId);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
