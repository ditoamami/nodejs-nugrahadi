import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
