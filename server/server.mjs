import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
// app.use(express.json());

//Using JSX for views
// app.set("view engine", "jsx");

//Static Folder
app.use(express.static(path.join(__dirname, "..", "index.html")));
// app.use(express.static("public"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// app.use("/", main);
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
