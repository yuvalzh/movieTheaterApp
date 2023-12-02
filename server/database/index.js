import mongoose from "mongoose";

const CONNECTION_URL =
  "mongodb+srv://yuval_zehavi:Aa123456@atlascluster.w1hghcn.mongodb.net/";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnect = () => {
  mongoose
    .connect(CONNECTION_URL, options)
    .then(() => console.log("Connected to database."))
    .catch((err) =>
      console.error("Error connecting to database:", err.message)
    );
};

export default dbConnect;
