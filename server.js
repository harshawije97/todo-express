"use strict";

import express, { static as _static } from "express";
import { join } from "path";
import Posts from "./app/routes/posts.js";

const PORT = process.env.PORT || 8000;

const app = express();
// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes -- root api
/**
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about-us.html"));
});
 */

// Static files
// ! There is a error in this static file setup. Uncomment this to find the answer later
// app.use(_static(join(__dirname, "public")));

// API Routes
app.use("/api/v1/posts", Posts);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
