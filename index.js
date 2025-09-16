// Import required modules
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Configure and init app
// Resolve file/dir paths (ES modules don't have __filename/__dirname by default)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const app = express();

// Set up middlewares
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use("/public", express.static(path.join(process.cwd(), "/public")));

// Define routers
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// Start server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
