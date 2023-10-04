import "babel-register";
import React from "react";

import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "../routes/record.mjs";
import { renderToString } from "react-dom/server";

import path from "path";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

//Using JSX for views
app.set("view engine", "jsx");

//Static Folder
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// app.use("/", main);
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
